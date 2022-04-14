const mailjet = require ('node-mailjet').connect('a6da48d49b41262eb49a49821248e4d3', '7927d5b5ee884a9825cdee51f69a0f32');

module.exports = async (to, content) => {
  const subject = content.Subject;
  const text = content.TextPart;
  const html = content.HTMLPart;
  const task =content.TextPart;
  await mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": "hello@re-24.com",
          "Name": "RE-24 Team"
        },
        "To": [
          {
            "Email": to,
            "Name": ""
          }
        ],
        "Subject": subject,
        "TextPart": text,
        "HTMLPart": html,
        "CustomID": task
      }
    ]
  })
}