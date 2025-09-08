export async function sendReply(sock, msg, text) {
    try {
        const safeText = typeof text === "string" ? text : String(text || "");
        const formattedText = `╔══✪〘 *KNIGTH BOT* 〙✪══\n║\n${safeText
            .split('\n')
            .map(line => `║ ${line}`)
            .join('\n')}\n║\n╚════════════════════╝`;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                text: formattedText,
                footer: "BUGS BOT V2",
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    externalAdReply: {
                        title: "KNIGTH BOT",
                        body: "Tap to view our WhatsApp Channel",
                        mediaType: 1,
                        thumbnailUrl: "https://whatsapp.com/channel/0029Vb6M5AOGpLHGNydryF1i",
                        renderLargerThumbnail: false,
                        sourceUrl: "https://whatsapp.com/channel/0029Vb6M5AOGpLHGNydryF1i"
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: "120363422073902686@newsletter"
                    }
                }
            },
            { quoted: msg } // ✅ This ensures the reply is linked to the original user message
        );
    } catch (err) {
        console.error("❌ Failed to send reply:", err);
    }
}
