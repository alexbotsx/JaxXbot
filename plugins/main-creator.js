let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:JAXXBOT;;\nFN:JAXXBOT\nORG:JAXXBOT\nTITLE:\nitem1.TEL;waid=51929381278:51929381278\nitem1.X-ABLabel:JAXXBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:JAXXBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@Alexnsnk7⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
