import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>
                            Lucas Dantas
                        </Text>
                        <Text color="gray.300" fontSize="small">
                            lucas.dantas@gmail.com
                        </Text>
                    </Box>
                )
            }

            <Avatar size="md" name="Lucas Dantas" src="https://github.com/LucasDants.png" />
        </Flex>
    )
}