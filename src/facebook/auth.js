const { FB_APP_ID, FB_API_VERSION, FB_REDIRECT_URL, FB_BUSINESS_SCOPES } =
  process.env

const authorizeBM = (req, res) => {
  res.redirect(
    `${process.env.FB_BASE_URL}/${FB_API_VERSION}/dialog/oauth?client_id=${FB_APP_ID}&redirect_uri=${FB_REDIRECT_URL}&scope=${FB_BUSINESS_SCOPES}`
  )
}

const callbackBM = (req, res) => {
  console.log('==========================')
  console.log(req)
  console.log(Object.keys(req))
  console.log(Object.values(req))
  console.log('==========================')
}

module.exports = {
  authorizeBM,
  callbackBM,
}
