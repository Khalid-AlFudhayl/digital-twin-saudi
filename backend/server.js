import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

let cities = [

  {
    id: 1,
    city: 'أبها',
    traffic: '61%',
    air: '38',
    status: 'مستقر'
  },

  {
    id: 2,
    city: 'خميس مشيط',
    traffic: '72%',
    air: '41',
    status: 'مزدحم'
  }

]

let conversationHistory = [

  {
    role: 'system',
    content:
      'أنت مساعد ذكي لمنصة مدن ذكية اسمها بصيرة AI.'
  }

]

app.get('/', (req, res) => {

  res.json({
    success: true,
    message: 'Baseerah AI Backend Running'
  })

})

app.get('/cities', (req, res) => {

  res.json(cities)

})

app.post('/cities', (req, res) => {

  const newCity = {

    id: Date.now(),
    ...req.body

  }

  cities.push(newCity)

  res.json(newCity)

})

app.put('/cities/:id', (req, res) => {

  const cityId = Number(req.params.id)

  cities = cities.map((city) =>

    city.id === cityId
      ? { ...city, ...req.body }
      : city

  )

  res.json({
    success: true
  })

})

app.delete('/cities/:id', (req, res) => {

  const cityId = Number(req.params.id)

  cities = cities.filter(

    (city) => city.id !== cityId

  )

  res.json({
    success: true
  })

})

app.post('/ai', async (req, res) => {

  try {

    const { message } = req.body

    conversationHistory.push({

      role: 'user',
      content: message

    })

    const completion =
      await openai.chat.completions.create({

        model: 'gpt-4.1-mini',

        messages: conversationHistory

      })

    console.log(completion)

    const aiReply =
      completion.choices?.[0]?.message?.content
      || 'لم يتم توليد رد من الذكاء الاصطناعي.'

    conversationHistory.push({

      role: 'assistant',
      content: aiReply

    })

    if (conversationHistory.length > 20) {

      conversationHistory =
        conversationHistory.slice(-20)

    }

    res.json({

      reply: aiReply

    })

  }

  catch (error) {

    console.log(error)

    res.status(500).json({

      error: 'AI request failed'

    })

  }

})

app.listen(5000, () => {

  console.log(
    'Server running on port 5000'
  )

})