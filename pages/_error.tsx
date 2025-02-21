const Error: any = (statusCode: any, title: any) => (
  <div>
    {title}==={statusCode}
  </div>
)

const initialProps = (res: any, err: any) => {
  const statusCode = res && res.statusCode ? res.statusCode : err?.statusCode
  return { statusCode, title: err?.message }
}

Error.getInitialProps = initialProps

Error.displayName = "Error"

export default Error
