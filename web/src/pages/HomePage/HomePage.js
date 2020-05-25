import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/web'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {zip && <WeatherCell zip={zip} />}
    </>
  )
}

export default HomePage
