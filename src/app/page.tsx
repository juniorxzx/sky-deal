import Button from '@/components/Button';
import S from './page.module.css';
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/Pages/Home/Hero';
import HowWork from '@/components/Pages/Home/HowWork';

export default function Home() {
  return (
    <>

      <HeroSection />
      <HowWork />

      {/* <section id="vantagens" className={S.vantagens}>
        <div className={S.container}>
          <div className={S.sectionHeader}>
            <h2>Vantagens exclusivas</h2>
            <p>Benefícios que só a SKY oferece para você</p>
          </div>
          <div className={S.cards}>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>100% Digital</h3>
              <p>Resolva tudo pelo celular ou computador, sem precisar sair de casa.</p>
            </div>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-percentage"></i>
              </div>
              <h3>Descontos Especiais</h3>
              <p>Condições exclusivas com descontos de até 90% para pagamento à vista ou parcelado.</p>
            </div>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Nome Limpo</h3>
              <p>Em até 5 dias úteis após o pagamento, seu nome estará limpo novamente.</p>
            </div>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-lock"></i>
              </div>
              <h3>Segurança Total</h3>
              <p>Seus dados são protegidos com a mais alta tecnologia de criptografia.</p>
            </div>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-headset"></i>
              </div>
              <h3>Suporte Especializado</h3>
              <p>Equipe de especialistas prontos para te ajudar em todas as etapas.</p>
            </div>
            <div className={S.card}>
              <div className={S.cardIcon}>
                <i className="fas fa-file-signature"></i>
              </div>
              <h3>Contrato Digital</h3>
              <p>Assinatura eletrônica com validade jurídica para sua segurança.</p>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className={S.cta}>
        <div className={S.container}>
          <div className={S.ctaContent}>
            <h2>Pronto para reorganizar sua vida financeira?</h2>
            <p>Consulte agora suas oportunidades e comece a negociar com condições exclusivas.</p>
            <div className={S.ctaForm}>
              <div className={S.inputGroup}>
                <input type="text" placeholder="Digite seu CPF" />
                <Button label='Consultar Agora' type='primary' className={S.buttonCta} />
              </div>
              <small>Consulta gratuita e sem compromisso</small>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
