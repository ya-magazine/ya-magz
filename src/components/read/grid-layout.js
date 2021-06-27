import { Flex } from "@chakra-ui/react"

const MagazinePageLayout = ({ children }) => {
  return (
    <Flex
      as="main"
      py={{ base: 4, md: 6, lg: 8 }}
      px={{ base: 6, md: 10 }}
      flexDir="column"
      minHeight="100vh"
    >
      {children}
    </Flex>
  )
}

export default MagazinePageLayout
