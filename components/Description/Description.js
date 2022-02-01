import styles from "./Description.module.sass";

export default function Description() {
  return (
    <section className={styles.description}>
      <h3 className={styles.description_title}>
        Виды утеплителя <span>ISOVER</span>
      </h3>
      <div className={styles.description_wrapper}>
        <p className={styles.description_subtitle}>
          ИЗОВЕР Профи - профессиональный утеплитель для всего дома с повышенной
          упругостью и улучшенной теплопроводностью - λ 0.037. Подходит для
          ненагружаемых конструкций: крыш, стен, полов, перегородок и
          перекрытий. Является также шумоизоляцией.
        </p>
        <p className={styles.description_subtitle}>
          ИЗОВЕР Теплые Стены Стронг - это утеплитель в плитах с улучшенной
          теплопроводностью - λ 0.034 и повышенной упругостью. Разработан
          специально для утепления внешних и внутренних стен, также подходит для
          крыш. Гарантия устойчивости конструкции без дополнительных крепежей.
          Является также шумоизоляцией.
        </p>
        <p className={styles.description_subtitle}>
          ИЗОВЕР Теплая Крыша Стронг — очень теплая λ - 0.034 и упругая плита в
          рулоне, разработанная специально для утепления и шумоизоляции скатных
          крыш и мансард. Уникальная разметка на поверхности утеплителя
          облегчает нарезку минваты. Материал может выпускаться как со
          специальной разметкой на поверхности утеплителя, так и без нее.
        </p>
        <p className={styles.description_subtitle}>
          ИЗОВЕР Скатная Кровля Комфорт - минеральный утеплитель на основе
          кварца с защитным покрытием по технологии KRAFT. Обеспечивает
          комфортный и быстрый монтаж.
        </p>
        <p className={styles.description_subtitle}>
          ISOVER ШУМКА — минераловатная шумоизоляция с повышенной упругостью.
          Эффективно защищает от шума в составе перегородок и других
          конструкций: не слышен громкий разговор в соседней комнате. Индекс
          изоляции воздушного шума 63дБ*
        </p>
      </div>
      {/* <div className={styles.description_percentages}>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon1.png"
            alt="ГИДРАЦИОННЫЕ ДОБАВКИ"
          />
          <p className={styles.description_item_number}>2 .5%</p>
          <p className={styles.description_item_text}>ГИДРАЦИОННЫЕ ДОБАВКИ</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon2.png"
            alt="ДЕРЕВЯННАЯ СТРУЖКА"
          />
          <p className={styles.description_item_number}>24 %</p>
          <p className={styles.description_item_text}>ДЕРЕВЯННАЯ СТРУЖКА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon3.png"
            alt="ВОДА"
          />
          <p className={styles.description_item_number}>8 .5%</p>
          <p className={styles.description_item_text}>ВОДА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon4.png"
            alt="ПОРТЛАНД-ЦЕМЕНТ"
          />
          <p className={styles.description_item_number}>65 %</p>
          <p className={styles.description_item_text}>ПОРТЛАНД-ЦЕМЕНТ</p>
        </div>
      </div> */}
    </section>
  );
}
