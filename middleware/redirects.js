export default function (req, res, next) {
  const redirects = [
    {
      from: '/contract/settings',
      to: '/contract/settings/profile',
    },
    {
      from: '/contract/settings/bank_cards',
      to: '/contract/settings/bank_cards/cards',
    },
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
     res.end()
  } else {
    next()
  }
}
