const { cmd } = require('../command');

cmd({
    pattern: "jid",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, { from, quoted, isGroup, sender, isOwner, isAdmins, reply }) => {
    try {
        // Private chat එකේදී bot owner only
        if (!isGroup && !isOwner) {
            return reply("*⚠️ Only the bot owner can use this command in private chat.*");
        }

        // Group එකේදී Admins සහ Owner ට වඩා යුතුයි
        if (isGroup && !(isOwner || isAdmins)) {
            return reply("*⚠️ Only group admins or the bot owner can use this command.*");
        }

        // Quoted message එකක් තිබුනොත් quoted user JID return කරන්න
        if (quoted) {
            return reply(`*Quoted User JID:* *${quoted.sender}*`);
        }

        // Group එකක් නම් Group JID return කරන්න
        if (isGroup) {
            return reply(`*Group JID:* *${from}@g.us*`);
        }

        // Private chat නම් sender JID return කරන්න
        return reply(`*User JID:* *${sender}@s.whatsapp.net*`);

    } catch (e) {
        console.error("Error:", e);
        reply(`❌ An error occurred: ${e.message}`);
    }
});

// jid2 (Same function duplicated with different command name)
cmd({
    pattern: "jid2",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (conn, mek, m, { from, quoted, isGroup, sender, isOwner, isAdmins, reply }) => {
    try {
        if (!isGroup && !isOwner) {
            return reply("*⚠️ Only the bot owner can use this command in private chat.*");
        }

        if (isGroup && !(isOwner || isAdmins)) {
            return reply("*⚠️ Only group admins or the bot owner can use this command.*");
        }

        if (quoted) {
            return reply(`*Quoted User JID:* *${quoted.sender}*`);
        }

        if (isGroup) {
            return reply(`*Group JID:* *${from}@g.us*`);
        }

        return reply(`*User JID:* *${sender}@s.whatsapp.net*`);

    } catch (e) {
        console.error("Error:", e);
        reply(`❌ An error occurred: ${e.message}`);
    }
});
