"use client";

import { Avatar, Badge, Button } from "@/shared/components";

import dynamic from "next/dynamic";

import { useRouter } from "next/navigation";

import { CartIcon } from "@/shared/assets/icons/cart";
import { MenuIcon } from "@/shared/assets/icons/menu";

import { useCartStore } from "@/entities/cart";

import { MouseEventHandler } from "react";

import { useUserStore } from "@/entities/user";

import "./index.css";

const RequestCallbackModal = dynamic(
  () => import("@/widgets/modals/request-callback-modal")
);

interface IHeaderProps {
  isDrawerOpen: boolean
  onDrawerButtonClick: () => void
}

export default function Header(props: IHeaderProps): JSX.Element {
  const { isDrawerOpen, onDrawerButtonClick: handleDrawerButtonClick } = props

  const router = useRouter()

  const user = useUserStore(state => state.user)
  const cartEntities = useCartStore(state => state.entities)

  const handleOnRedirect = (url: string): MouseEventHandler => {
    return () => router.push(url)
  }

  return (
      <header className="header">
        <div className="flex gap-10 items-center">
          <button
            className="header-icon-button transition-transform"
            style={{ transform: isDrawerOpen ? 'rotate(90deg)' : undefined }} 
            onClick={handleDrawerButtonClick}
          >
            <MenuIcon />
          </button>

          <h2 className="header-title">
            <span className="block w-[150px]" style={{ letterSpacing: '0.03rem' }}>Нутрициолог</span>
            
            <span>
              Мария <span className="text-primary-main">Коляда</span>
            </span>
          </h2>
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
