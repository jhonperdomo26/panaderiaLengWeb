import { useTranslation } from "react-i18next";

const Cumpleaños = () => {
  const {t} = useTranslation();
  return (
    <div><h1>{t("prueva")}</h1></div>
  )
}

export default Cumpleaños