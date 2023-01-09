import { Link, animateScroll as scroll } from 'react-scroll'
import * as S from './styles'

const LinkWrapper = () => (
  <S.Wrapper>
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      01. About
    </Link>
    <Link
      activeClass="active"
      to="worked"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      02. Worked
    </Link>
    <Link
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      03. Contact Me
    </Link>
  </S.Wrapper>
)

export default LinkWrapper
