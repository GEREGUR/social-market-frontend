import { smcopy } from "../../../assets";

const Footer = () => {
  return (
    <footer className="sm:w-full bg-black  text-white flex flex-col sm:flex-row justify-between">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row w-full sm:w-2/4 p-4 sm:ml-24 mt-4">
        {/* Section "Customers" */}
        <div className="mb-8 sm:mb-0 sm:mr-12">
          <h3 className="mt-6 font-bold mb-4 text-lg">Клиентам</h3>
          <ul>
            <li className="pb-2 text-sm">Личный кабинет</li>
            <li className="pb-2 text-sm">Программа лояльности</li>
            <li className="pb-2 text-sm">Оплата и доставка</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/* Section "Social Networks" */}
        <div className="mb-8 sm:mb-0 sm:mr-12 text-lg">
          <h3 className="mt-6 font-bold mb-4">Социальные сети</h3>
          <ul>
            <li className="pb-2 text-sm">ВК</li>
            <li className="pb-2 text-sm">Telegram</li>
            <li className="pb-2 text-sm">Instagram</li>
          </ul>
        </div>
        {/* Section "Information" */}
        <div className="mb-8 sm:mb-0 sm:mr-12 text-lg">
          <h3 className="mt-6 font-bold mb-4">Информация</h3>
          <ul>
            <li className="pb-2 text-sm">О нас</li>
            <li className="pb-2 text-sm">Магазин</li>
            <li className="pb-2 text-sm">Контакты</li>
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
