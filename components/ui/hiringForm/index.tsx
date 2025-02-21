import React from "react"
import StyledHiringForm from "./styles"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type Inputs = {
  fullname: string
  phone: string
  email: string
  jobpost: string
  keyskills: string
  message: string
  file: File
}

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const templateID = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

const HiringForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const templateParams = {
      from_name: data.fullname,
      to_name: "Anas",
      phone_number: data.phone,
      email: data.email,
      job_post: data.jobpost,
      key_skills: data.keyskills,
      message: data.message,
    }
    // emailjs.send(serviceID, templateID, templateParams, publicKey).then(
    //   (response) => {
    //     console.log("SUCCESS!", response.status, response.text)
    //     reset()
    //   },
    //   (error) => {
    //     console.log("FAILED...", error)
    //   }
    // )
  }

  return (
    <StyledHiringForm>
      <h2>Fill in the form so that we can make a proposal that fits.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <input
            type="text"
            placeholder="Full Name *"
            {...register("fullname", { required: true })}
          />
        </div>
        <div className="form-item">
          <input
            type="tel"
            placeholder="Phone number *"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="form-item">
          <input
            type="email"
            placeholder="Email *"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Job Post *"
            {...register("jobpost", { required: true })}
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="Keyskills *"
            {...register("keyskills", { required: true })}
          />
        </div>
        <div className="wrapper">
          <div className="form-item file">
            <span>Attach Your Resume</span>
            <input type="file" {...register("file")} />
          </div>
          <div className="form-item message">
            <textarea
              placeholder="Optimal Message"
              {...register("message")}
            ></textarea>
          </div>
        </div>
        <div className="form-item submit">
          <input type="submit" value={"Apply Now"} />
        </div>
      </form>
    </StyledHiringForm>
  )
}

export default HiringForm
