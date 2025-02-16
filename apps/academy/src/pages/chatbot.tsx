import { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { CONSTANT } from "shared-lib"; // Import constants

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const Chatbot = () => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const sessionId = Math.random().toString(36).substr(2, 9); // Generate session ID

    // Function to format the bot's response
    const formatResponse = (response) => {
        // Convert bold markdown (**bold**) to <strong> tags
        let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Bullet Formatting
        formattedResponse = formattedResponse.replace(
            /(\d+\.\s)([^\n]+)/g,
            '<li>$2</li>'
        );

        formattedResponse = formattedResponse.replace(/<li>/g, '<ul><li>')
                                             .replace(/<\/li>/g, '</li></ul>');

        if (formattedResponse.includes('<ul><ul>')) {
            formattedResponse = formattedResponse.replace('<ul><ul>', '<ul>')
                                                 .replace('</ul></ul>', '</ul>');
        }

        return formattedResponse;
    };

    // Send message function
    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true); // Disable input and button

        try {
            const response = await fetch(
                `https://rag-api-g3zo.onrender.com/query?query=${encodeURIComponent(input)}&session_id=${sessionId}`,
                { method: "GET", headers: { "Content-Type": "application/json" } }
            );

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            // Formatting response
            const formattedResponse = formatResponse(data.generated_response);
            setMessages((prev) => [...prev, { role: "bot", content: formattedResponse }]);
        } catch (error) {
            console.error("Fetch error:", error);
            setMessages((prev) => [...prev, { role: "bot", content: "Error fetching response. Try again." }]);
        } finally {
            setLoading(false);
        }
    };

    // Handle enter key press
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <Box
            className={CLASS_SECTION_ANIMATED_BG}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "100vh",
                p: 3,
            }}
        >
            {/* Header Section */}
            <Box sx={{ mb: 3 }}>
                <Typography
                    gutterBottom
                    maxWidth="clamp(5ch, 100%, 20ch)"
                    sx={{
                        fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem" },
                        color: "black.main",
                        mx: "auto",
                    }}
                    variant="h1"
                >
                    MindelvGPT
                </Typography>
                <Typography
                    color="black.main"
                    gutterBottom
                    maxWidth="clamp(10ch, 100%, 60ch)"
                    sx={{ mx: "auto" }}
                    variant="body1"
                >
                    Chat with our AI mentor for guidance on your career journey!
                </Typography>
            </Box>

            {/* Chat Interface */}
            <Box
                sx={{
                    maxWidth: 600,
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {/* Chat Box */}
                <Box
                    sx={{
                        width: "100%",
                        border: "1px solid #ddd",
                        p: 2,
                        height: 400,
                        overflowY: "auto",
                        textAlign: "left",
                        borderRadius: 2,
                        bgcolor: "white",
                    }}
                >
                    {messages.map((msg, index) => (
                        <Box
                            key={index}
                            sx={{
                                p: 1,
                                my: 1,
                                borderRadius: 2,
                                bgcolor: msg.role === "user" ? "primary.main" : "grey.300",
                                color: msg.role === "user" ? "white" : "black",
                                textAlign: msg.role === "user" ? "right" : "left",
                            }}
                        >
                            {/* Use dangerouslySetInnerHTML to render formatted HTML */}
                            <div
                                dangerouslySetInnerHTML={{ __html: msg.content }}
                            />
                        </Box>
                    ))}
                    {loading && (
                        <Box sx={{ textAlign: "center", mt: 1 }}>
                            <CircularProgress size={24} />
                        </Box>
                    )}
                </Box>

                {/* Input & Send Button */}
                <TextField
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}  // Listen for enter key press
                    placeholder="Type a message..."
                    disabled={loading}
                />
                <Button
                    onClick={sendMessage}
                    disabled={loading}
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Send"}
                </Button>
            </Box>
        </Box>
    );
};

export default Chatbot;