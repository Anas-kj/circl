import { Footer, Header } from "@components/ui"
import { Main as MainComponent } from "./styles"

interface LayoutProps {
  children: React.ReactNode
}

// We can remplace LayoutProps to  React.PropsWithChildren<{}>
export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      {/* <Header /> */}
      <MainComponent>{children}</MainComponent>
      {/* <Footer /> */}
    </>
  )
}
