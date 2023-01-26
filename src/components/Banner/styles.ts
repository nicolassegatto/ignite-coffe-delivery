import styled from "styled-components"
import banner from "../../assets/Background.svg"

export const BannerContainer = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  
`
export const BannerContent = styled.div`
    max-width: 1440px;
    margin: auto;
    display: flex;
    gap: 4rem;
`

export const InfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  
`

export const TitlesBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  h1{
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 900;
    font-size: 3.4rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ItensBanner = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;

    div{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      p{
        width: 100%;
        font-size: 1rem;
      }
    }
`

export const ImageBanner = styled.div`
  max-width: 29.75rem;
  box-sizing:border-box;
`