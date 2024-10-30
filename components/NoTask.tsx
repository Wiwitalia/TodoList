import { Flex, Alert, AlertIcon } from '@chakra-ui/react'

const NoTask = () => {
  return (
    <Flex>
        <Alert status='warning'>
            <AlertIcon />
            Pas de tâche pour le moment, Tranquilou bilou
        </Alert>
    </Flex>
)
}

export default NoTask