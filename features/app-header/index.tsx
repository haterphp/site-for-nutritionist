"use client";

import Link from "next/link";

import { useDetectPath } from "@/shared/helpers/paths";

import { Button, makeClassname, Modal, useModal } from "@/shared/components";

import "./index.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { CartIcon } from "@/shared/assets/icons/cart";

const LINKS = [
  { label: "Главная", to: "/" },
  { label: "Обо мне", to: "/about-me" },
  { label: "Каталог", to: "/catalog" },
  { label: "Статьи", to: "/articles" },
];

const RequestCallbackModal = dynamic(
  () => import("@/features/modals/request-callback-modal")
);

export default function Header(): JSX.Element {
  const detect = useDetectPath();
  const router = useRouter()

  const handleOnRedirect = (): void => {
    router.push('/login')
  }

  return (
    <header className="header">
      <h2 className="header-title">
        <span className="block w-[150px]" style={{ letterSpacing: '0.03rem' }}>Нутрициолог</span>
        
        <span>
          Мария <span className="text-primary-main">Коляда</span>
        </span>
      </h2>

      <div className="header-links">
        {LINKS.map(({ label, to }) => (
          <Link
            key={label}
            href={to}
            className={makeClassname(
              "header-link",
              detect(to) && "header-link--active"
            )}
          >
            {label}
          </Link>
        ))}
      </div>

        <div className="header-left-content">
          <div className="header-callback-container">
            <a className="header-callback-link" href="tel:+79999999999">
              +7 (999) 999 99-99
            </a>

            <RequestCallbackModal
              Button={({ open }) => (
                <span className="header-callback-link underline" onClick={open}>
                  Запрос на обратный звонок
                </span>
              )}
            />
          </div>

          <button className="header-icon-button">
            <CartIcon />
          </button>

          <Button color="secondary" className="min-w-[100px]" onClick={handleOnRedirect}>Войти</Button>
        </div>

    </header>
  );
}
