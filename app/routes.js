// Sends the user to the Moon or Mars page based on their answer
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/destination-answer', (req, res) => {
  const destination = req.session.data['destination']

  if (destination === 'Moon') {
    return res.redirect('/moon')
  }
  if (destination === 'Mars') {
    return res.redirect('/mars')
  }

  res.render('destination', { error: true })
})
