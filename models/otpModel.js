const db = require('../config/database')
const mailer = require('../mailer')

// TODO: create schema validation
class OtpModel {
  static model = db.collection('otps')

  static generateCode() {
    return Math.floor(100000 + Math.random() * 900000)
  }

  static async find(query = {}) {
    return this.model.findOne(query)
  }

  static async create(params = {}) {
    let otpCode = this.generateCode()
    const result = await this.model.insertOne({
      ...params,
      code: otpCode,
      active: true,
      createdAt: new Date(),
    })
    if (result) mailer.send(params.email, 'one time OTP', `your otp code is: ${otpCode}`)
    return result
  }

  static async verify(email, code) {
    const otp = await this.model.findOneAndUpdate(
      { email, code, active: true },
      { $set: { active: false } },
      { returnNewDocument: true }
    )
    return otp
  }


}

module.exports = OtpModel