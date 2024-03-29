import React from 'react'
import Networks from '../Networks'
import About from '../AboutMe/about'
import Worked from '../AboutMe/worked'
import Contact from '../AboutMe/contact'

import * as S from './styles'

const Person = () => {
  return (
    <>
      <S.Section>
        <S.Content>
          <S.Div>Hy, my name is</S.Div>
          <S.H1>Abner Martins</S.H1>
          <S.H2>I build things for the web.</S.H2>
          <S.Paragraph>
            I`m a software engineer specializing in building (frontend)
            exceptional digital experiences. Currently, I`m focused on building
            accessible, products.
          </S.Paragraph>
        </S.Content>
        <Networks />
      </S.Section>
      <About />
      <Worked />
      <Contact />
    </>
  )
}

export default Person
