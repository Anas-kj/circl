/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Libraries Imports
import { useEffect, useState } from "react"
import { decode } from "html-entities"

// Local Imports
import { Wrapper } from "./styles"
import Container from "@components/common/container"
import useTranslation from "next-translate/useTranslation"

// Types
type NewsletterProps = {
  status: string
  message: string
  onValidated: (value: any) => void
}

const Newsletter = ({ status, message, onValidated }: NewsletterProps) => {
  let { t } = useTranslation("common")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  // Local variables
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    if (status === "success" && !error) clearFields()
  }, [status, error])

  const clearFields = () => {
    setEmail(null)
  }

  // Functions
  const handleInputKeyEvent = (event: any) => {
    setError(null)
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      handleFormSubmit()
    }
  }

  const getMessage = (message: string) => {
    if (!message) {
      return null
    }
    const result = message?.split("-") ?? null
    if ("0" !== result?.[0]?.trim()) {
      return decode(message)
    }
    const formattedMessage = result?.[1]?.trim() ?? null
    return formattedMessage ? decode(formattedMessage) : null
  }

  const handleFormSubmit = () => {
    setError(null)

    if (!email) {
      setError("Please enter a valid email address")
      return null
    }

    const isFormValidated = onValidated({ EMAIL: email })

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated
  }
  // Local Data

  return (
    <Wrapper className="content" id="newsLetter">
      <Container>
        <label htmlFor="email-input" className="newsletter-title">
          {t("newsletter_title_1")}
        </label>
        <label htmlFor="email-input" className="newsletter-title">
          {t("newsletter_title_2")}
        </label>
        <div className="newsletter-form">
          <div className="newsletter-input">
            <input
              required
              name="email"
              type="email"
              className="mail-input"
              title="Your Email"
              placeholder={t("newsletter_placeholder")}
              value={email ? email : ""}
              onChange={(event) => setEmail(event?.target?.value ?? "")}
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />

            <button className="mail-button" onClick={handleFormSubmit}>
              {status === "sending"
                ? t("newsletter_status_1")
                : t("newsletter_status_2")}
            </button>
          </div>
          <>
            {status === "error" || error ? (
              <div
                className={`newsletter-message ${
                  status === "error" || error ? "show-message" : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message)!,
                }}
              />
            ) : null}
            {status === "success" && !error && (
              <div
                className={`newsletter-message ${
                  status === "success" && !error ? "show-message" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: decode(message) }}
              />
            )}
          </>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Newsletter
