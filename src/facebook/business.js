const axios = require('axios')
const { FB_USER_ACCESS_TOKEN, FB_GRAPH_API_VERSION, FB_AD_ACCOUNT_ID } =
  process.env
const GRAPH_API_BASE_URL = `https://graph.facebook.com/${FB_GRAPH_API_VERSION}`

// Function to get Ad Account Details
async function getAdAccountDetails(adAccountId) {
  try {
    const response = await axios.get(`${GRAPH_API_BASE_URL}/${adAccountId}`, {
      params: {
        fields: 'name,account_status,currency,spend_cap',
        access_token: FB_USER_ACCESS_TOKEN,
      },
    })
    return response.data
  } catch (error) {
    console.error(
      'Error fetching ad account details:',
      error.response ? error.response.data : error.message
    )
    throw error
  }
}

// Function to get Ad Insights (you can customize parameters here)
async function getAdInsights(adAccountId, datePreset = 'lifetime') {
  try {
    const response = await axios.get(
      `${GRAPH_API_BASE_URL}/${adAccountId}/insights`,
      {
        params: {
          date_preset: datePreset,
          fields: 'campaign_name,impressions,clicks,spend',
          access_token: FB_USER_ACCESS_TOKEN,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error(
      'Error fetching ad insights:',
      error.response ? error.response.data : error.message
    )
    throw error
  }
}

module.exports = {
  getAdAccountDetails,
  getAdInsights,
}
