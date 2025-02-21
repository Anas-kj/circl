import React, { useState } from "react"
import Container from "@components/common/container"
import StyledContactForm from "./styles"
import emailjs from "@emailjs/browser"
import useTranslation from "next-translate/useTranslation"
const serviceID: string = process.env.NEXT_PUBLIC_SERVICE_ID || ""
const templateID: string = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID || ""
const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY || ""

const ContactModel = ({}) => {
  let { t } = useTranslation("common")
  const { lang } = useTranslation()
  const isRTL = lang === "ar"
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      fullname === "" ||
      position === null ||
      email === "" ||
      description === "" ||
      contactOption === null ||
      duologue === null
    ) {
      setCustomError(true)
      return
    }
    setLoading(true)
    const templateParams = {
      from_name: fullname,
      to_name: "Cyber Division",
      message: description,
      contact_option: contactOption,
      contact: contactOption === "Email" ? "" : contact,
      position: position,
      website_link: websiteLink,
      duologue: duologue ? "Yes" : "No",
      email: email,
    }
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text)
        setSuccess(true)
        setLoading(false)
        resetForm()
      },
      (error) => {
        console.log("FAILED...", error)
      }
    )
  }
  type contactOptions = "Email" | "WhatsApp" | "LinkedIn" | null
  type positions =
    | "It Management"
    | "Director"
    | "Business Relationships Manager"
    | null
  const [fullname, setFullname] = useState("")
  const [showPositionList, setShowPositionList] = useState<boolean>(false)
  const [position, setPosition] = useState<positions>(null)
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [websiteLink, setWebsiteLink] = useState("")
  const [contactOption, setContactOption] = useState<contactOptions>(null)
  const [contact, setContact] = useState("")
  const [duologue, setDuologue] = useState<boolean | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const [customError, setCustomError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const resetForm = () => {
    setFullname("")
    setShowPositionList(false)
    setPosition(null)
    setEmail("")
    setDescription("")
    setWebsiteLink("")
    setContactOption(null)
    setContact("")
    setDuologue(null)
    setCustomError(false)
    setSuccess(false)
    setLoading(false)
  }

  const choosePosition = (position: positions) => {
    setPosition(position)
    setShowPositionList(false)
  }
  return (
    <StyledContactForm isRTL={isRTL}>
      <div className="contact-form">
        <Container>
          <div className="header">
            <h2>
              {t("contact_model_title_1")}
              <br />
              {t("contact_model_title_2")}
            </h2>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-item">
              <input
                id="fname"
                type="text"
                placeholder={t("contact_model_fname_placeholder")}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              {fullname === "" && customError && (
                <small className="text-danger">
                  {t("contact_model_fname_error")}
                </small>
              )}
            </div>
            <div className="form-item">
              <div className={`dropdown ${showPositionList ? "active" : ""}`}>
                <input
                  type={"text"}
                  placeholder={t("contact_model_position_placeholder")}
                  readOnly
                  className="text-box"
                  value={position ? position : ""}
                  onClick={() => setShowPositionList(!showPositionList)}
                />
                <div className={`options ${showPositionList ? "active" : ""}`}>
                  <div onClick={() => choosePosition("It Management")}>
                    {t("contact_model_position_option_1")}
                  </div>
                  <div onClick={() => choosePosition("Director")}>
                    {t("contact_model_position_option_2")}
                  </div>
                  <div
                    onClick={() =>
                      choosePosition("Business Relationships Manager")
                    }
                  >
                    {t("contact_model_position_option_3")}
                  </div>
                </div>
              </div>
              {position === null && customError && (
                <small className="text-danger">
                  {t("contact_model_position_error")}
                </small>
              )}
            </div>
            <div className="form-item">
              <input
                type="email"
                placeholder={t("contact_model_email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email === "" && customError && (
                <small className="text-danger">
                  {" "}
                  {t("contact_model_email_error")}
                </small>
              )}
            </div>
            <div className="form-item">
              <textarea
                id="description"
                placeholder={t("contact_model_description_placeholder")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {description === "" && customError && (
                <small className="text-danger">
                  {t("contact_model_description_error")}
                </small>
              )}
            </div>
            <div className="form-item">
              <input
                id="websiteLink"
                type="text"
                placeholder={t("contact_model_websiteLink_placeholder")}
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
              />
            </div>
            <div className="contact-duologue">
              <div className="form-item contact">
                <p>{t("contact_model_contact_label")}</p>
                <div className="checkboxes">
                  <div className="checkbox-item">
                    <div
                      onClick={() => {
                        setContactOption("Email")
                      }}
                    >
                      {contactOption === "Email" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="contact">
                      {t("contact_model_contact_option_1")}
                    </label>
                  </div>
                  <div className="checkbox-item">
                    <div
                      onClick={() => {
                        setContactOption("LinkedIn")
                      }}
                    >
                      {contactOption === "LinkedIn" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="contact">
                      {t("contact_model_contact_option_2")}
                    </label>
                  </div>
                  <div className="checkbox-item">
                    <div
                      onClick={() => {
                        setContactOption("WhatsApp")
                      }}
                    >
                      {contactOption === "WhatsApp" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="contact">
                      {t("contact_model_contact_option_3")}
                    </label>
                  </div>
                </div>
                {contactOption !== null && contactOption !== "Email" && (
                  <div className="form-item">
                    <input
                      type="text"
                      placeholder={`Please fill in your ${contactOption}`}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    {contact === "" && customError && (
                      <small className="text-danger">
                        {t("contact_model_contact_error")}
                      </small>
                    )}
                  </div>
                )}

                {contactOption === null && customError && (
                  <small className="text-danger">
                    {t("contact_model_contact_error")}
                  </small>
                )}
              </div>
              <div className="form-item">
                <p>{t("contact_model_duologue_label")}</p>
                <div className="checkboxes">
                  <div className="checkbox-item">
                    <div
                      onClick={() => {
                        setDuologue(true)
                      }}
                    >
                      {(duologue === null || duologue === false
                        ? false
                        : true) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="duologue">
                      {t("contact_model_duologue_option_1")}
                    </label>
                  </div>
                  <div className="checkbox-item">
                    <div
                      onClick={() => {
                        setDuologue(false)
                      }}
                    >
                      {(duologue === null || duologue === true
                        ? false
                        : true) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="duologue">
                      {t("contact_model_duologue_option_2")}
                    </label>
                  </div>
                </div>
                {duologue === null && customError && (
                  <small className="text-danger">
                    {t("contact_model_duologue_error")}
                  </small>
                )}
              </div>
            </div>

            <div className="form-item last-item">
              {success && (
                <div className="success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>

                  <p>{t("contact_model_success_message")}</p>
                </div>
              )}
              {loading && (
                <svg
                  id="loading-spinner"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    id="loading-circle"
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#fff"
                    strokeWidth="4"
                  />
                </svg>
              )}
              {!loading && !success && (
                <input type="submit" value={t("contact_model_send_btn")} />
              )}
            </div>
          </form>
        </Container>
      </div>
    </StyledContactForm>
  )
}

export default ContactModel
