import { smcopy } from "../../../assets";

const Footer = () => {
  return (
    <footer className="sm:w-full bg-black sm:h-80 text-white flex flex-col sm:flex-row justify-between">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row w-full sm:w-2/5 p-4 sm:ml-24 mt-4">
        {/* Section "Customers" */}
        <div className="mb-8 sm:mb-0 sm:mr-12">
          <h3 className="mt-6 font-bold mb-4">Клиентам</h3>
          <ul>
            <li className="pb-2">Личный кабинет</li>
            <li className="pb-2">Программа лояльности</li>
            <li className="pb-2">Оплата и доставка</li>
            <li>Часто задаваемые вопросы</li>
          </ul>
        </div>
        {/* Section "Social Networks" */}
        <div className="mb-8 sm:mb-0 sm:mr-12">
          <h3 className="mt-6 font-bold mb-4">Социальные сети</h3>
          <ul>
            <li className="pb-2">ВК</li>
            <li className="pb-2">Telegram</li>
            <li className="pb-2">Instagram</li>
          </ul>
        </div>
        {/* Section "Information" */}
        <div>
          <h3 className="mt-6 font-bold mb-4">Информация</h3>
          <ul>
            <li className="pb-2">О нас</li>
            <li className="pb-2">Магазин</li>
            <li className="pb-2">Контакты</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="mx-4 sm:mx-24 mt-4">
        <img src={smcopy} alt="Копирайт" className="w-32 sm:w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
