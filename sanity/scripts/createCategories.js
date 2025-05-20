const { createClient } = require('@sanity/client')

// Replace these values with your actual Sanity project details
const client = createClient({
  projectId: 'fgqmojaj', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
  token: 'skvDIvinYGgUnhg0bSlnuCD2lnnB7GZDKXxAufIghAtSqDkyz0XZ8soeirQ7hrTIczmBp0S5nyf9A0f6js49I0h70MYQoURopKN4W2TdGQidHmbzKaO0RxZCsYE9ppstnZSnrvsHELXfq1APHvTE4N7LN5mheVX8TPmXqsP0PZpZZNKOvmeb' // Replace with your new Editor token
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
  console.log('Creating categories...')
  
  for (const category of categories) {
    try {
      await client.create(category)
      console.log(`Created category: ${category.title}`)
    } catch (error) {
      console.error(`Error creating category ${category.title}:`, error.message)
    }
  }
  
  console.log('Done!')
}

createCategories() 