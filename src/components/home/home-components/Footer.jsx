import { smcopy } from "../../../assets"

const Footer = () => {
  return (
    <footer className="w-full bg-black h-80 text-white flex justify-between">
        <div className="flex w-2/5 ml-24 mt-4">
          <div>
            <h3 className="mt-6 font-bold mb-4">Клиентам</h3>
            <ul>
              <li className="pb-2">Личный кабинет</li>
              <li className="pb-2">Программа лояльности</li>
              <li className="pb-2">Оплата и доставка</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="ml-20">
            <h3 className="mt-6 font-bold mb-4">Социальный сети</h3>
            <ul>
              <li className="pb-2">ВК</li>
              <li className="pb-2">Telegram</li>
              <li className="pb-2">Instagram</li>
            </ul>
          </div>
          <div className="ml-20">
            <h3 className="mt-6 font-bold mb-4">Информация</h3>
            <ul>
              <li className="pb-2">О нас</li>
              <li className="pb-2">Магазин</li>
              <li className="pb-2">Контакты</li>
            </ul>
          </div>
        </div>
        <div className="mr-24">
          <img src={smcopy} alt="copyright" />
        </div>
  </footer>
  )
}

export default Footer