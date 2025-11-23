
import net from "net";

export default function handler(req, res) {
    const SERVER_IP = "5.39.13.21";  
    const SERVER_PORT = 17091; // change if your GTPS port is different

    const socket = new net.Socket();
    socket.setTimeout(1500);

    socket.connect(SERVER_PORT, SERVER_IP, () => {
        res.status(200).json({
            success: true,
            server: { status: "online" }
        });
        socket.destroy();
    });

    socket.on("error", () => {
        res.status(200).json({
            success: false,
            server: { status: "offline" }
        });
    });

    socket.on("timeout", () => {
        res.status(200).json({
            success: false,
            server: { status: "offline" }
        });
        socket.destroy();
    });
}
