"use client";

import Link from "next/link";

import { useDetectPath } from "@/shared/helpers/paths";

import { Avatar, Badge, Button, makeClassname } from "@/shared/components";

import dynamic from "next/dynamic";

import { useRouter } from "next/navigation";

import { CartIcon } from "@/shared/assets/icons/cart";

import { useCartStore } from "@/entities/cart";

import "./index.css";
import { MouseEventHandler, useEffect } from "react";
import { useUserStore } from "@/entities/user";

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

  const user = useUserStore(state => state.user)
  const cartEntities = useCartStore(state => state.entities)

  const handleOnRedirect = (url: string): MouseEventHandler => {
    return () => router.push(url)
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

            <Badge label={cartEntities.length.toString()} isVisible={cartEntities.length > 0}>
              <button className="header-icon-button" onClick={handleOnRedirect('/cart')}>
                  <CartIcon />
              </button>
            </Badge>

            {  user === null ? (
              <Button
                color="secondary"
                className="min-w-[100px]"
                onClick={handleOnRedirect('/login')}
              >
                  Войти
              </Button>
          ) : (<Avatar value={user.name.charAt(0)} className="header-avatar" onClick={handleOnRedirect('/account')} />) }
        </div>

    </header>
  );
}
