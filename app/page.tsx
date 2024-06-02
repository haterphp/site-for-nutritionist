'use client';

import { Button } from "@/shared/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useMemo } from "react";

import './default-page.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import MainImage from '@/shared/assets/images/Group_170000000.png'

import Certificate1 from '@/shared/assets/images/certificates/unnamed_1.jpg'
import Certificate2 from '@/shared/assets/images/certificates/unnamed_6.jpg'
import Certificate3 from '@/shared/assets/images/certificates/unnamed_7.jpg'
import Certificate4 from '@/shared/assets/images/certificates/unnamed_8.jpg'
import Certificate5 from '@/shared/assets/images/certificates/unnamed_9.jpg'

import Reviews1 from '@/shared/assets/images/reviews/couple-having-public-intimacy-moments.jpg'
import Reviews2 from '@/shared/assets/images/reviews/pexels-croft-alexander-747385-1624229.jpg'
import Reviews3 from '@/shared/assets/images/reviews/side-view-woman-posing-on-chair.jpg'
import Reviews4 from '@/shared/assets/images/reviews/yong-pretty-woman-portrait.jpg'

import { CardsGridTemplate } from "@/widgets/layouts/cards-grid";
import { ProductCard } from "@/features/cards/product-card";
import { useCatalogStore } from "@/entities/catalog";

import RequestCallbackModal from "@/widgets/modals/request-callback-modal";
import ReviewCard, { IReviewCardProps } from "@/features/cards/review-card";

const Cetificates = [
  { url: Certificate1, label: 'Certificate1'},
  { url: Certificate2, label: 'Certificate2'},
  { url: Certificate3, label: 'Certificate3'},
  { url: Certificate4, label: 'Certificate4'},
  { url: Certificate5, label: 'Certificate5'}
]

const REVIEWS: IReviewCardProps[] = [
  { id: '1', src: Reviews1, user: 'Елизавета', comment: 'Я обратилась к Марии Олеговне по причине быстрой утомляемости и общего плохого самочувствия, с которым устала бороться. В результате консультации, основываясь на результатах моих анализов, я получила индивидуальную систему оздоровления. Для наиболее эффективной работы я выбрала тариф "Сопровождение на месяц" и все это время была на связи с доктором, отправляла отчеты о питании и приеме витамин. Теперь я чувствую себя гораздо энергичнее, ко мне вернулись силы на активную жизнь, пришло понимание о сбалансированном питании, сон перестал быть прерывистым. Меня очень радуют результаты, прием БАДов расписан на год вперед, спасибо, Мария Олеговна!'},
  { id: '2', src: Reviews2, user: 'Анастасия', comment: 'После родов я, неожиданно для себя, набрала 15 килограмм, от которых необходимо было избавиться, но знаний и дисциплины для похудения мне не хватало, ведь ранее с такой проблемой я не сталкивалась. Благодаря Марии я поняла, что бороться нужно не только с лишним весом, а благодаря индивидуальной системе оздоровления с сопровождением на месяц я успешно следовала всем рекомендациям, благодаря которым уже за первый месяц избавилась от 5 килограмм. А помимо этого ногти  заметно укрепились, а энергии стало больше. Спасибо большое, Мария!'},
  { id: '3', src: Reviews3, user: 'Екатерина', comment: 'Хочу сказать Марии огромное спасибо! Я давно ощущала головокружение и слабость, а в гос. больнице терапевт по результатом анализов сказала, что у меня все в порядке. Благодаря Марии я всё-таки узнала, что у меня железодефицитная анемия (и другие дефициты) а главное, что с этим делать. Я понимаю, что это длительная работа, но уже после двух месяцев ощущаю себя гораздо лучше, головокружения почти прекратились, а также снизилась тяга к сладкой и вредной еде!'},
  { id: '4', src: Reviews4, user: 'Вероника', comment: 'Мария, спасибо большое за Ваш профессионализм! Я давно подозревала у себя дефициты и обращалась к другим нутрициологам, но мне не помогало. В результате консультации у Марии были выявлены подозрения на более серьезные диагнозы, в результате чего я была направлена ко врачу эндокринологу, который действительно помог мне. Очень приятно, что есть добросовестные специалисты, которые действительно помогают пациентам, а не только продают свои услуги!'}
]


export default function Home() {
  const router = useRouter()

  const [products, loadProducts] = useCatalogStore((state) => [state.cards, state.loadCardsByCategory])

  const handleOnRedirect = (url: string): MouseEventHandler => {
    return () => {
      router.push(url)
    }
  }

  const slicedProducts = useMemo(() => products.slice(0, 4), [products])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <div className="flex flex-col">

      <article className="min-h-[450px] flex justify-center items-center gap-[150px]">
        <div className="flex flex-col items-start">
          <h1 className="title"><span className="text-primary-main">Здоровый образ жизни</span> для взрослых <br />и детей от врача-нутрициолога</h1>

          <div className="flex gap-3 mt-[25px]">
            <Button size="large" onClick={handleOnRedirect('/catalog')}>Перейти в каталог</Button>
            <Button color="secondary" size="large" onClick={handleOnRedirect('#reviews')}>Оставить ваш отзыв</Button>
          </div>
        </div>

        <div>
          <Image src={MainImage} alt="image" className="-mb-2" />
        </div>
      </article>

      <article className="min-w-[450px] p-[50px] px-[150px] rounded-lg bg-primary-main">
        <h1 className="title title--white text-center mb-[50px]">Обо мне</h1>

        <div className="flex items-center justify-between">
          <ol className="list-disc flex flex-col gap-2 max-w-[550px]">
            <li className="text-white">Закончила СибГМУ по специальности - врач - педиатр.</li>
            <li className="text-white">4 года назад получила образование нутрициолога и начала свою практику</li>
            <li className="text-white">Успела поработать в медицинском центре нутрициологом и за все время набрала большое количество довольных клиентов</li>
            <li className="text-white">Являюсь детским нутрициологом, помогаю молодым мамам привить культуру питания своим детям</li>
            <li className="text-white">Я также мама. Моей дочке недавно исполнился год и я смело могу сказать, что мой ребенок хорошо развивается, набирает вес и НЕ болеет.</li>
            <li className="text-white">С 2023 года работаю в сибирской компании по производству БАДов TULSI, где активно участвую в разработке продуктов и могу отвечать за их эффективность и качество</li>
            <li className="text-white">Все время учусь. В год прохожу несколько обучений по своей специальности и все время развиваюсь.</li>
          </ol>

          <Carousel autoPlay infiniteLoop showStatus={false} className="max-w-[450px]">
            { Cetificates.map(({url, label}) => (
              <div key={label}>
                  <Image src={url} alt={label} />
              </div>
            )) }
          </Carousel>
        </div>
      </article>

      <article className="min-w-[450px] p-[100px] flex flex-col gap-[50px] items-center">
        <h1 className="title text-center">Хиты продаж</h1>

        <CardsGridTemplate
          items={slicedProducts}
          CardFactory={ProductCard}
          context={{ isHideButton: true }}
        />

        <Button size="large" onClick={handleOnRedirect('/catalog')}>Перейти в каталог</Button>
      </article>

      <article className="min-w-[450px] p-[50px] flex flex-col gap-[50px] bg-primary-main items-center rounded-lg">
        <h1 className="title title--white text-center">Отзывы моих клиентов</h1>

        <CardsGridTemplate
          items={REVIEWS}
          className="mt-[70px]"
          CardFactory={ReviewCard}
          context={{ isHideButton: true }}
        />

        <RequestCallbackModal Button={({ open }) => (
          <Button size="large" className="!bg-white !text-secondary-main hover:!bg-white/90" onClick={open}>Оставьте свой отзыв</Button>
        )} />
            
      </article>

    </div>
  );
}
