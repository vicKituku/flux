const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'abc12345', // Replace with your actual project ID from Sanity dashboard
  dataset: 'production',
  token: 'your_api_token', // Replace with your actual API token
  apiVersion: '2024-03-19',
  useCdn: false
})

const categories = [
  {
    _type: 'category',
    title: 'Marketing Automation',
    slug: {
      _type: 'slug',
      current: 'marketing-automation'
    }
  },
  {
    _type: 'category',
    title: 'No-Code & Low-Code Automation',
    slug: {
      _type: 'slug',
      current: 'no-code-automation'
    }
  },
  {
    _type: 'category',
    title: 'AI Chatbots & Virtual Assistants',
    slug: {
      _type: 'slug',
      current: 'ai-chatbots'
    }
  }
]

async function createCategories() {
  try {
    for (const category of categories) {
      await client.create(category)
    }
    console.log('Categories created successfully!')
  } catch (error) {
    console.error('Error creating categories:', error)
  }
}

createCategories() 