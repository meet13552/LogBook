import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface LogEntry {
  level: string;
  message: string;
  resourceId: string;
  timestamp: string;
  traceId: string;
  spanId: string;
  commit: string;
  metadata: {
    parentResourceId: string;
  };
}

const FormTable = () => {
  const [formData, setFormData] = useState({
    level: "",
    message: "",
    resourceId: "",
    traceId: "",
    spanId: "",
    timestamp_gte: "",
    timestamp_lte: "",
    commit: "",
    metadata: {
      parentResourceId: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [responseData, setResponseData] = useState<{
    message: string;
    data: LogEntry[]; // Define the type here
  }>({
    message: "Logs retrieved successfully",
    data: [],
  });

  const filteredData = Object.fromEntries(
    Object.entries(formData).filter(([_, value]) => value !== "")
  );

  const filteredDataWithoutMetadata = {
    ...filteredData,
    metadata:
      formData.metadata.parentResourceId !== "" ? formData.metadata : undefined,
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/getLogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredDataWithoutMetadata),
      });

      const data = await response.json();
      setResponseData(data);
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <SimpleGrid columns={5} spacing={10} padding="30px">
        <FormControl>
          <FormLabel>Level</FormLabel>
          <Input name="level" value={formData.level} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Use '*' and '?' for regexp"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Resource ID</FormLabel>
          <Input
            name="resourceId"
            value={formData.resourceId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Trace ID</FormLabel>
          <Input
            name="traceId"
            value={formData.traceId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Span ID</FormLabel>
          <Input
            name="spanId"
            value={formData.spanId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>From</FormLabel>
          <Input
            placeholder="YYYY-MM-DDTHH:mm:ssZ"
            name="timestamp_gte"
            value={formData.timestamp_gte}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>To</FormLabel>
          <Input
            placeholder="YYYY-MM-DDTHH:mm:ssZ"
            name="timestamp_lte"
            value={formData.timestamp_lte}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Commit</FormLabel>
          <Input
            name="commit"
            value={formData.commit}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Parent Resource ID</FormLabel>
          <Input
            name="parentResourceId"
            value={formData.metadata.parentResourceId}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <Button
        marginLeft="2%"
        width="96%"
        colorScheme="green"
        size="lg"
        onClick={handleSubmit}
      >
        Search
      </Button>

      {responseData.message && (
        <VStack spacing={4} marginTop={8}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Level</Th>
                <Th>Message</Th>
                <Th>Resource ID</Th>
                <Th>Timestamp</Th>
                <Th>Trace ID</Th>
                <Th>Span ID</Th>
                <Th>Commit</Th>
                <Th>Parent Resource ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {responseData.data.map((log, index) => (
                <Tr key={index}>
                  <Td>{log.level}</Td>
                  <Td>{log.message}</Td>
                  <Td>{log.resourceId}</Td>
                  <Td>{log.timestamp}</Td>
                  <Td>{log.traceId}</Td>
                  <Td>{log.spanId}</Td>
                  <Td>{log.commit}</Td>
                  <Td>{log.metadata.parentResourceId}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      )}
    </>
  );
};

export default FormTable;
