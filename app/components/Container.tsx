'use client'
interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[640px] mx-auto xl:px-6 md-px-4 px-2">{children}</div>
  )
}

export default Container