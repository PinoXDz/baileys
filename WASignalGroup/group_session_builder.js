const SenderKeyDistributionMessage = require('./sender_key_distribution_message')
const keyhelper = require('./keyhelper')
class GroupSessionBuilder {
constructor(senderKeyStore) {
this.senderKeyStore = senderKeyStore
}
async process(senderKeyName, senderKeyDistributionMessage) {
console.log('\n[GROUP SESSION] 🔐 Memproses session untuk:', senderKeyName)
console.log('[GROUP SESSION] 📥 Distribusi diterima:', {
id: senderKeyDistributionMessage.getId(),
iteration: senderKeyDistributionMessage.getIteration()
})
const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
senderKeyRecord.addSenderKeyState(
senderKeyDistributionMessage.getId(),
senderKeyDistributionMessage.getIteration(),
senderKeyDistributionMessage.getChainKey(),
senderKeyDistributionMessage.getSignatureKey()
)
await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
console.log('[GROUP SESSION] 🚀 Session diperbarui & disimpan.')
}
async create(senderKeyName) {
const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
console.log('\n[GROUP SESSION] ✨ Membuat session baru untuk:', senderKeyName)
if (senderKeyRecord.isEmpty()) {
console.log('[GROUP SESSION] 📦 Tidak ditemukan data sebelumnya. Membuat key baru...')
const keyId = keyhelper.generateSenderKeyId()
const senderKey = keyhelper.generateSenderKey()
const signingKey = keyhelper.generateSenderSigningKey()
senderKeyRecord.setSenderKeyState(keyId, 0, senderKey, signingKey)
await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
console.log('[GROUP SESSION] 🔑 Key baru berhasil dibuat & disimpan.')
} else {
console.log('[GROUP SESSION] ♻️ Key lama ditemukan, tidak perlu generate ulang.')
}
const state = senderKeyRecord.getSenderKeyState()
return new SenderKeyDistributionMessage(
state.getKeyId(),
state.getSenderChainKey().getIteration(),
state.getSenderChainKey().getSeed(),
state.getSigningKeyPublic()
)
}
}
module.exports = GroupSessionBuilder