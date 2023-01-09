import { CartBall, CoffeBall, PackageBall, TimerBall } from "../Buttons";
import { BannerContainer, BannerContent, ImageBanner, InfoBanner, ItensBanner, TitlesBanner } from "./styles";
import banner from '../../assets/banner.svg'

export function Banner() {
  return(
    <BannerContainer>
        <BannerContent>
          <InfoBanner>
            <TitlesBanner>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </TitlesBanner>
            <ItensBanner>
              <div>
                <CartBall />
                <p>Compra simples e segura</p>
              </div>

              <div>
                <PackageBall />
                <p>Entrega rápida e rastreada</p>
              </div>

              <div>
                <TimerBall />
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div>
                <CoffeBall />
                <p>O café chega fresquinho até você</p>
              </div>
            </ItensBanner>

          </InfoBanner>

          <ImageBanner>
            <img src={banner} alt="Copo de café termico descartavel, em meio a grãos de café em um fundo amarelo." />
          </ImageBanner>
        </BannerContent>
      </BannerContainer>
  )
}