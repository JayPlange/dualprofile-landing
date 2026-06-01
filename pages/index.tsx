import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// ─── i18n ────────────────────────────────────────────────────────────────────
const LANGS: Record<string, Record<string, string>> = {
  en: {
    nav_features: 'Features', nav_demo: 'Demo', nav_pricing: 'Pricing', nav_faq: 'FAQ',
    nav_cta: "Add to Chrome — It's Free",
    live_badge: 'Live on Chrome Web Store · Free to install',
    hero_h1_1: 'People have been asking', hero_h1_2: 'WhatsApp for years.',
    hero_now: 'Now it exists.',
    hero_sub: 'Show different profile photos to different contacts — your boss sees one, your friends see another. Same number. Same WhatsApp.',
    hero_cta: "Add to Chrome — It's Free", hero_demo: 'Watch Demo',
    reddit_title: 'The answer was always "no."',
    reddit_sub: 'Before DualProfile, the only solution was to get a second phone number. Not anymore.',
    reddit_1_q: '"Is there a way to display different profile pictures to different people?"',
    reddit_1_a: 'Top answer: Nope.',
    reddit_2_q: '"Different profile picture between web and app — is it possible?"',
    reddit_2_a: 'Top answer: Only if you have two phone numbers.',
    reddit_3_q: '"WhatsApp should support multiple profile photos. My close circle should see one, others see another."',
    reddit_3_a: 'Top answer: [deleted]',
    until_now: 'Until now.',
    how_title: 'Set up once with someone. Works automatically.',
    how_sub: "Three steps and you're done — forever.",
    step1_title: 'You install DualProfile and upload your photos.',
    step1_sub: 'One for work. One for life.',
    step2_title: 'You assign which photo each contact sees.',
    step2_sub: 'Takes about 2 minutes.',
    step3_title: 'They install too — your photo switches automatically.',
    step3_sub: "No extra steps once they're set up.",
    callout_text: 'DualProfile works when both people have it installed. Send someone the link — setup takes 3 minutes.',
    callout_btn: 'Copy install link',
    features_title: 'Everything You Need',
    features_sub: 'Simple, powerful features designed for privacy-conscious users who want control over their WhatsApp identity.',
    feat1_title: 'Dual Uploads', feat1_desc: 'Upload different profile photos for different contacts. Your work colleagues see one image, your friends see another.',
    feat2_title: 'Live Test Preview', feat2_desc: 'See exactly what each contact sees before you switch. Preview your identity changes in real-time.',
    feat3_title: 'Privacy First', feat3_desc: 'All logic runs locally in your browser. Your images and data never leave your device. Zero cloud storage.',
    pricing_title: 'Simple Pricing', pricing_sub: 'Start free. Upgrade when you are ready.',
    free_label: 'Free', free_sub: 'Get started, no card needed', free_forever: 'forever',
    pro_label: 'Pro', pro_sub: 'For power users', pro_mo: 'per month',
    annual_label: 'Annual', annual_sub: 'Save vs monthly', annual_yr: 'per year · ~£4.92/mo',
    lifetime_label: 'Lifetime', lifetime_sub: 'Pay once, own it forever', lifetime_once: 'one-time',
    badge_popular: 'POPULAR', badge_value: 'BEST VALUE',
    feat_2contacts: 'Up to 2 contacts', feat_preview: 'Preview mode', feat_p2p: 'P2P photo sync',
    feat_chrome: 'Chrome & Edge support', feat_unlimited: 'Unlimited contacts',
    feat_priority: 'Priority support', feat_future: 'All future features', feat_nofee: 'No recurring fees',
    btn_add_chrome: 'Add to Chrome', btn_get_pro: 'Get Pro', btn_get_annual: 'Get Annual', btn_get_lifetime: 'Get Lifetime',
    viral_title: 'The feature WhatsApp never built.',
    viral_sub: 'Free to start. Works on WhatsApp Web in Chrome and Edge.',
    viral_cta: "Add to Chrome — It's Free", viral_note: 'Free plan includes 2 contacts · No credit card needed',
    faq_title: 'Frequently Asked Questions', faq_sub: 'Got questions? We have answers.',
    faq_1_q: 'Does my contact need to install anything?',
    faq_1_a: 'Yes — DualProfile works peer-to-peer. When you assign a photo to a contact and they have DualProfile installed, your photo appears on their screen automatically. Share the install link with them and setup takes about 3 minutes.',
    faq_2_q: 'Does this work on the WhatsApp mobile app?',
    faq_2_a: 'No — DualProfile works on WhatsApp Web (web.whatsapp.com) in Chrome or Edge on desktop only. The mobile app is not supported.',
    faq_3_q: 'How does Preview Mode work?',
    faq_3_a: "Preview Mode shows you exactly what each contact sees when they view your profile. It's a local simulation that demonstrates how your different photos will appear to specific contacts.",
    faq_4_q: 'Is my data secure?',
    faq_4_a: 'Absolutely. All photos and data are stored locally on your device. Nothing is uploaded to our servers or shared with third parties.',
    footer_rights: 'All rights reserved.',
    modal_title: 'Install DualProfile',
    modal_sub: 'Free to start. Takes 2 minutes to set up. Works on WhatsApp Web in Chrome and Edge.',
    modal_btn: "Add to Chrome — It's Free",
    modal_note: '🔒 Free plan includes 2 contacts. No credit card needed.',
    copied_msg: 'Copied!',
    footer_note: 'No data leaves your device — all control is local.',
    status_title: 'Current Status',
    status_1_title: 'Preview Mode',
    status_1_desc: 'See how others would see your profile',
    status_2_title: 'P2P Sync',
    status_2_desc: 'Real-time profile switching now live',
    status_3_title: 'Group Chats',
    status_3_desc: 'Not supported yet',
    usd_approx: '≈',
    demo_privacy: '🔒 This works entirely on WhatsApp Web. No chat data is stored.',
    demo_caption: 'Watch how Preview Mode shows exactly what each contact sees.',
  },
  es: {
    nav_features: 'Funciones', nav_demo: 'Demo', nav_pricing: 'Precios', nav_faq: 'FAQ',
    nav_cta: 'Agregar a Chrome — Gratis',
    live_badge: 'En Chrome Web Store · Gratis para instalar',
    hero_h1_1: 'La gente lleva años pidiéndole', hero_h1_2: 'esto a WhatsApp.',
    hero_now: 'Ahora existe.',
    hero_sub: 'Muestra fotos de perfil diferentes a diferentes contactos — tu jefe ve una, tus amigos ven otra. El mismo número. El mismo WhatsApp.',
    hero_cta: 'Agregar a Chrome — Gratis', hero_demo: 'Ver demo',
    reddit_title: 'La respuesta siempre fue "no."',
    reddit_sub: 'Antes de DualProfile, la única solución era conseguir un segundo número. Ya no.',
    reddit_1_q: '"¿Hay alguna forma de mostrar diferentes fotos de perfil a diferentes personas?"',
    reddit_1_a: 'Respuesta principal: No.',
    reddit_2_q: '"¿Foto de perfil diferente entre web y app — es posible?"',
    reddit_2_a: 'Respuesta principal: Solo si tienes dos números de teléfono.',
    reddit_3_q: '"WhatsApp debería admitir múltiples fotos de perfil."',
    reddit_3_a: 'Respuesta principal: [eliminado]',
    until_now: 'Hasta ahora.',
    how_title: 'Configura una vez con alguien. Funciona automáticamente.',
    how_sub: 'Tres pasos y listo — para siempre.',
    step1_title: 'Instalas DualProfile y subes tus fotos.',
    step1_sub: 'Una para el trabajo. Una para la vida.',
    step2_title: 'Asignas qué foto ve cada contacto.',
    step2_sub: 'Tarda unos 2 minutos.',
    step3_title: 'Ellos también lo instalan — tu foto cambia automáticamente.',
    step3_sub: 'Sin pasos extra una vez configurado.',
    callout_text: 'DualProfile funciona cuando ambas personas lo tienen instalado. Envía el enlace — la configuración tarda 3 minutos.',
    callout_btn: 'Copiar enlace de instalación',
    features_title: 'Todo lo que necesitas',
    features_sub: 'Funciones simples y potentes para usuarios que quieren controlar su identidad en WhatsApp.',
    feat1_title: 'Doble carga', feat1_desc: 'Sube diferentes fotos para diferentes contactos. Tus colegas ven una imagen, tus amigos ven otra.',
    feat2_title: 'Vista previa en vivo', feat2_desc: 'Ve exactamente lo que cada contacto ve antes de cambiar. Sin adivinanzas.',
    feat3_title: 'Privacidad primero', feat3_desc: 'Todo funciona localmente en tu navegador. Tus imágenes nunca salen de tu dispositivo.',
    pricing_title: 'Precios simples', pricing_sub: 'Empieza gratis. Actualiza cuando estés listo.',
    free_label: 'Gratis', free_sub: 'Empieza, sin tarjeta', free_forever: 'para siempre',
    pro_label: 'Pro', pro_sub: 'Para usuarios avanzados', pro_mo: 'por mes',
    annual_label: 'Anual', annual_sub: 'Ahorra vs mensual', annual_yr: 'por año · ~£4.92/mes',
    lifetime_label: 'De por vida', lifetime_sub: 'Paga una vez, úsalo siempre', lifetime_once: 'pago único',
    badge_popular: 'POPULAR', badge_value: 'MEJOR VALOR',
    feat_2contacts: 'Hasta 2 contactos', feat_preview: 'Modo vista previa', feat_p2p: 'Sincronización P2P',
    feat_chrome: 'Compatible con Chrome y Edge', feat_unlimited: 'Contactos ilimitados',
    feat_priority: 'Soporte prioritario', feat_future: 'Todas las funciones futuras', feat_nofee: 'Sin cargos recurrentes',
    btn_add_chrome: 'Agregar a Chrome', btn_get_pro: 'Obtener Pro', btn_get_annual: 'Obtener Anual', btn_get_lifetime: 'Obtener De por vida',
    viral_title: 'La función que WhatsApp nunca creó.',
    viral_sub: 'Gratis para empezar. Funciona en WhatsApp Web en Chrome y Edge.',
    viral_cta: 'Agregar a Chrome — Gratis', viral_note: 'El plan gratuito incluye 2 contactos · Sin tarjeta de crédito',
    faq_title: 'Preguntas frecuentes', faq_sub: '¿Tienes preguntas? Tenemos respuestas.',
    faq_1_q: '¿Mi contacto necesita instalar algo?',
    faq_1_a: 'Sí — DualProfile funciona de igual a igual. Cuando asignas una foto a un contacto y ellos tienen DualProfile instalado, tu foto aparece en su pantalla automáticamente.',
    faq_2_q: '¿Funciona en la app móvil de WhatsApp?',
    faq_2_a: 'No — DualProfile funciona en WhatsApp Web en Chrome o Edge solo en escritorio. La app móvil no es compatible.',
    faq_3_q: '¿Cómo funciona el modo vista previa?',
    faq_3_a: 'El modo vista previa te muestra exactamente lo que cada contacto ve cuando visita tu perfil.',
    faq_4_q: '¿Están seguros mis datos?',
    faq_4_a: 'Absolutamente. Todas las fotos y datos se almacenan localmente en tu dispositivo.',
    footer_rights: 'Todos los derechos reservados.',
    modal_title: 'Instala DualProfile',
    modal_sub: 'Gratis para empezar. Tarda 2 minutos. Funciona en WhatsApp Web en Chrome y Edge.',
    modal_btn: 'Agregar a Chrome — Gratis',
    modal_note: '🔒 El plan gratuito incluye 2 contactos. Sin tarjeta de crédito.',
    copied_msg: '¡Copiado!',
    footer_note: 'No hay datos que salgan de tu dispositivo.',
    status_title: 'Estado actual',
    status_1_title: 'Modo vista previa',
    status_1_desc: 'Ve cómo te ven los demás',
    status_2_title: 'Sincronización P2P',
    status_2_desc: 'Cambio de perfil en tiempo real',
    status_3_title: 'Chats grupales',
    status_3_desc: 'Aún no compatible',
    usd_approx: '≈',
    demo_privacy: '🔒 Funciona completamente en WhatsApp Web. No se almacenan datos de chat.',
    demo_caption: 'Ve cómo el modo de vista previa muestra exactamente lo que ve cada contacto.',
  },
  fr: {
    nav_features: 'Fonctionnalités', nav_demo: 'Démo', nav_pricing: 'Tarifs', nav_faq: 'FAQ',
    nav_cta: 'Ajouter à Chrome — Gratuit',
    live_badge: 'Sur le Chrome Web Store · Gratuit',
    hero_h1_1: 'Les gens demandent ça à', hero_h1_2: 'WhatsApp depuis des années.',
    hero_now: 'Maintenant, ça existe.',
    hero_sub: "Montrez des photos de profil différentes à différents contacts — votre patron voit l'une, vos amis voient l'autre. Même numéro. Même WhatsApp.",
    hero_cta: 'Ajouter à Chrome — Gratuit', hero_demo: 'Voir la démo',
    reddit_title: 'La réponse a toujours été « non ».',
    reddit_sub: "Avant DualProfile, la seule solution était d'avoir un deuxième numéro. Plus maintenant.",
    reddit_1_q: "\"Y a-t-il un moyen d'afficher des photos de profil différentes à différentes personnes ?\"",
    reddit_1_a: 'Meilleure réponse : Non.',
    reddit_2_q: '"Photo de profil différente entre web et app — est-ce possible ?"',
    reddit_2_a: 'Meilleure réponse : Seulement avec deux numéros.',
    reddit_3_q: '"WhatsApp devrait permettre plusieurs photos de profil."',
    reddit_3_a: 'Meilleure réponse : [supprimé]',
    until_now: "Jusqu'à maintenant.",
    how_title: 'Configurez une fois. Fonctionne automatiquement.',
    how_sub: "Trois étapes et c'est fait — pour toujours.",
    step1_title: 'Vous installez DualProfile et téléchargez vos photos.',
    step1_sub: 'Une pour le travail. Une pour la vie.',
    step2_title: 'Vous assignez quelle photo chaque contact voit.',
    step2_sub: 'Prend environ 2 minutes.',
    step3_title: 'Ils installent aussi — votre photo change automatiquement.',
    step3_sub: 'Aucune étape supplémentaire une fois configuré.',
    callout_text: "DualProfile fonctionne quand les deux personnes l'ont installé. Envoyez le lien — la configuration prend 3 minutes.",
    callout_btn: "Copier le lien d'installation",
    features_title: 'Tout ce dont vous avez besoin',
    features_sub: 'Des fonctionnalités simples et puissantes pour contrôler votre identité WhatsApp.',
    feat1_title: 'Double téléchargement', feat1_desc: 'Téléchargez différentes photos pour différents contacts.',
    feat2_title: 'Aperçu en direct', feat2_desc: 'Voyez exactement ce que chaque contact voit avant de changer.',
    feat3_title: "Confidentialité d'abord", feat3_desc: 'Tout fonctionne localement. Vos images ne quittent jamais votre appareil.',
    pricing_title: 'Tarification simple', pricing_sub: 'Commencez gratuitement. Passez à la version supérieure quand vous êtes prêt.',
    free_label: 'Gratuit', free_sub: 'Commencez, sans carte', free_forever: 'pour toujours',
    pro_label: 'Pro', pro_sub: 'Pour les utilisateurs avancés', pro_mo: 'par mois',
    annual_label: 'Annuel', annual_sub: 'Économisez vs mensuel', annual_yr: 'par an · ~£4.92/mois',
    lifetime_label: 'À vie', lifetime_sub: 'Payez une fois, utilisez toujours', lifetime_once: 'paiement unique',
    badge_popular: 'POPULAIRE', badge_value: 'MEILLEURE VALEUR',
    feat_2contacts: "Jusqu'à 2 contacts", feat_preview: 'Mode aperçu', feat_p2p: 'Synchronisation P2P',
    feat_chrome: 'Chrome et Edge', feat_unlimited: 'Contacts illimités',
    feat_priority: 'Support prioritaire', feat_future: 'Toutes les futures fonctionnalités', feat_nofee: 'Sans frais récurrents',
    btn_add_chrome: 'Ajouter à Chrome', btn_get_pro: 'Obtenir Pro', btn_get_annual: 'Obtenir Annuel', btn_get_lifetime: 'Obtenir À vie',
    viral_title: "La fonctionnalité que WhatsApp n'a jamais construite.",
    viral_sub: 'Gratuit pour commencer. Fonctionne sur WhatsApp Web dans Chrome et Edge.',
    viral_cta: 'Ajouter à Chrome — Gratuit', viral_note: 'Le plan gratuit inclut 2 contacts · Sans carte de crédit',
    faq_title: 'Questions fréquentes', faq_sub: 'Des questions ? Nous avons des réponses.',
    faq_1_q: 'Mon contact doit-il installer quelque chose ?',
    faq_1_a: 'Oui — DualProfile fonctionne en pair-à-pair. Quand vous assignez une photo et que votre contact a DualProfile, votre photo apparaît automatiquement.',
    faq_2_q: "Cela fonctionne-t-il sur l'app mobile WhatsApp ?",
    faq_2_a: 'Non — DualProfile fonctionne sur WhatsApp Web dans Chrome ou Edge sur ordinateur uniquement.',
    faq_3_q: 'Comment fonctionne le mode aperçu ?',
    faq_3_a: 'Le mode aperçu vous montre exactement ce que chaque contact voit quand il consulte votre profil.',
    faq_4_q: 'Mes données sont-elles sécurisées ?',
    faq_4_a: 'Absolument. Toutes les photos sont stockées localement sur votre appareil.',
    footer_rights: 'Tous droits réservés.',
    modal_title: 'Installer DualProfile',
    modal_sub: 'Gratuit pour commencer. 2 minutes de configuration. Fonctionne sur WhatsApp Web.',
    modal_btn: 'Ajouter à Chrome — Gratuit',
    modal_note: '🔒 Le plan gratuit inclut 2 contacts. Sans carte de crédit.',
    copied_msg: 'Copié !',
    footer_note: 'Aucune donnée ne quitte votre appareil.',
    status_title: 'Statut actuel',
    status_1_title: 'Mode aperçu',
    status_1_desc: 'Voyez comment les autres vous voient',
    status_2_title: 'Synchronisation P2P',
    status_2_desc: 'Changement de profil en temps réel',
    status_3_title: 'Chats de groupe',
    status_3_desc: 'Pas encore pris en charge',
    usd_approx: '≈',
    demo_privacy: '🔒 Fonctionne entièrement sur WhatsApp Web. Aucune donnée de chat n'est stockée.',
    demo_caption: 'Voyez comment le mode aperçu montre exactement ce que chaque contact voit.',
  },
  pt: {
    nav_features: 'Recursos', nav_demo: 'Demo', nav_pricing: 'Preços', nav_faq: 'FAQ',
    nav_cta: 'Adicionar ao Chrome — Grátis',
    live_badge: 'Na Chrome Web Store · Grátis para instalar',
    hero_h1_1: 'As pessoas pedem isso ao', hero_h1_2: 'WhatsApp há anos.',
    hero_now: 'Agora existe.',
    hero_sub: 'Mostre fotos de perfil diferentes para contatos diferentes — seu chefe vê uma, seus amigos veem outra. Mesmo número. Mesmo WhatsApp.',
    hero_cta: 'Adicionar ao Chrome — Grátis', hero_demo: 'Ver demo',
    reddit_title: 'A resposta sempre foi "não".',
    reddit_sub: 'Antes do DualProfile, a única solução era ter um segundo número. Não mais.',
    reddit_1_q: '"Há como exibir fotos de perfil diferentes para pessoas diferentes?"',
    reddit_1_a: 'Melhor resposta: Não.',
    reddit_2_q: '"Foto de perfil diferente entre web e app — é possível?"',
    reddit_2_a: 'Melhor resposta: Só com dois números de telefone.',
    reddit_3_q: '"O WhatsApp deveria ter múltiplas fotos de perfil."',
    reddit_3_a: 'Melhor resposta: [excluído]',
    until_now: 'Até agora.',
    how_title: 'Configure uma vez com alguém. Funciona automaticamente.',
    how_sub: 'Três passos e pronto — para sempre.',
    step1_title: 'Você instala o DualProfile e envia suas fotos.',
    step1_sub: 'Uma para o trabalho. Uma para a vida.',
    step2_title: 'Você define qual foto cada contato vê.',
    step2_sub: 'Leva cerca de 2 minutos.',
    step3_title: 'Eles instalam também — sua foto muda automaticamente.',
    step3_sub: 'Sem etapas extras após a configuração.',
    callout_text: 'O DualProfile funciona quando as duas pessoas têm instalado. Envie o link — a configuração leva 3 minutos.',
    callout_btn: 'Copiar link de instalação',
    features_title: 'Tudo que você precisa',
    features_sub: 'Recursos simples e poderosos para quem quer controlar sua identidade no WhatsApp.',
    feat1_title: 'Upload duplo', feat1_desc: 'Envie fotos diferentes para contatos diferentes.',
    feat2_title: 'Prévia ao vivo', feat2_desc: 'Veja exatamente o que cada contato vê antes de mudar.',
    feat3_title: 'Privacidade em primeiro lugar', feat3_desc: 'Tudo funciona localmente. Suas imagens nunca saem do seu dispositivo.',
    pricing_title: 'Preços simples', pricing_sub: 'Comece grátis. Faça upgrade quando estiver pronto.',
    free_label: 'Grátis', free_sub: 'Comece, sem cartão', free_forever: 'para sempre',
    pro_label: 'Pro', pro_sub: 'Para usuários avançados', pro_mo: 'por mês',
    annual_label: 'Anual', annual_sub: 'Economize vs mensal', annual_yr: 'por ano · ~£4.92/mês',
    lifetime_label: 'Vitalício', lifetime_sub: 'Pague uma vez, use sempre', lifetime_once: 'pagamento único',
    badge_popular: 'POPULAR', badge_value: 'MELHOR CUSTO',
    feat_2contacts: 'Até 2 contatos', feat_preview: 'Modo prévia', feat_p2p: 'Sincronização P2P',
    feat_chrome: 'Chrome e Edge', feat_unlimited: 'Contatos ilimitados',
    feat_priority: 'Suporte prioritário', feat_future: 'Todos os recursos futuros', feat_nofee: 'Sem cobranças recorrentes',
    btn_add_chrome: 'Adicionar ao Chrome', btn_get_pro: 'Obter Pro', btn_get_annual: 'Obter Anual', btn_get_lifetime: 'Obter Vitalício',
    viral_title: 'O recurso que o WhatsApp nunca criou.',
    viral_sub: 'Grátis para começar. Funciona no WhatsApp Web no Chrome e Edge.',
    viral_cta: 'Adicionar ao Chrome — Grátis', viral_note: 'Plano gratuito inclui 2 contatos · Sem cartão de crédito',
    faq_title: 'Perguntas frequentes', faq_sub: 'Tem dúvidas? Temos respostas.',
    faq_1_q: 'Meu contato precisa instalar algo?',
    faq_1_a: 'Sim — o DualProfile funciona ponto a ponto. Quando você atribui uma foto e seu contato tem o DualProfile, sua foto aparece automaticamente.',
    faq_2_q: 'Funciona no app móvel do WhatsApp?',
    faq_2_a: 'Não — o DualProfile funciona no WhatsApp Web no Chrome ou Edge apenas no desktop.',
    faq_3_q: 'Como funciona o modo de prévia?',
    faq_3_a: 'O modo de prévia mostra exatamente o que cada contato vê quando acessa seu perfil.',
    faq_4_q: 'Meus dados estão seguros?',
    faq_4_a: 'Com certeza. Todas as fotos são armazenadas localmente no seu dispositivo.',
    footer_rights: 'Todos os direitos reservados.',
    modal_title: 'Instalar DualProfile',
    modal_sub: 'Grátis para começar. 2 minutos de configuração. Funciona no WhatsApp Web.',
    modal_btn: 'Adicionar ao Chrome — Grátis',
    modal_note: '🔒 Plano gratuito inclui 2 contatos. Sem cartão de crédito.',
    copied_msg: 'Copiado!',
    footer_note: 'Nenhum dado sai do seu dispositivo.',
    status_title: 'Status atual',
    status_1_title: 'Modo prévia',
    status_1_desc: 'Veja como os outros te veem',
    status_2_title: 'Sincronização P2P',
    status_2_desc: 'Troca de perfil em tempo real',
    status_3_title: 'Chats em grupo',
    status_3_desc: 'Ainda não suportado',
    usd_approx: '≈',
    demo_privacy: '🔒 Funciona inteiramente no WhatsApp Web. Nenhum dado de chat é armazenado.',
    demo_caption: 'Veja como o modo de prévia mostra exatamente o que cada contato vê.',
  },
  de: {
    nav_features: 'Funktionen', nav_demo: 'Demo', nav_pricing: 'Preise', nav_faq: 'FAQ',
    nav_cta: 'Zu Chrome hinzufügen — Kostenlos',
    live_badge: 'Im Chrome Web Store · Kostenlos installieren',
    hero_h1_1: 'Menschen bitten WhatsApp', hero_h1_2: 'seit Jahren darum.',
    hero_now: 'Jetzt gibt es es.',
    hero_sub: 'Zeige verschiedenen Kontakten verschiedene Profilfotos — dein Chef sieht eines, deine Freunde ein anderes. Gleiche Nummer. Gleiches WhatsApp.',
    hero_cta: 'Zu Chrome hinzufügen — Kostenlos', hero_demo: 'Demo ansehen',
    reddit_title: 'Die Antwort war immer „Nein".',
    reddit_sub: 'Vor DualProfile war die einzige Lösung eine zweite Nummer. Nicht mehr.',
    reddit_1_q: '"Gibt es eine Möglichkeit, verschiedenen Personen verschiedene Profilbilder anzuzeigen?"',
    reddit_1_a: 'Beste Antwort: Nein.',
    reddit_2_q: '"Verschiedenes Profilbild zwischen Web und App — ist das möglich?"',
    reddit_2_a: 'Beste Antwort: Nur mit zwei Telefonnummern.',
    reddit_3_q: '"WhatsApp sollte mehrere Profilfotos unterstützen."',
    reddit_3_a: 'Beste Antwort: [gelöscht]',
    until_now: 'Bis jetzt.',
    how_title: 'Einmal mit jemandem einrichten. Funktioniert automatisch.',
    how_sub: 'Drei Schritte und fertig — für immer.',
    step1_title: 'Du installierst DualProfile und lädst deine Fotos hoch.',
    step1_sub: 'Eines für die Arbeit. Eines fürs Leben.',
    step2_title: 'Du weist jedem Kontakt ein Foto zu.',
    step2_sub: 'Dauert etwa 2 Minuten.',
    step3_title: 'Sie installieren es auch — dein Foto wechselt automatisch.',
    step3_sub: 'Keine weiteren Schritte nach der Einrichtung.',
    callout_text: 'DualProfile funktioniert, wenn beide Personen es installiert haben. Sende den Link — die Einrichtung dauert 3 Minuten.',
    callout_btn: 'Installationslink kopieren',
    features_title: 'Alles, was du brauchst',
    features_sub: 'Einfache, leistungsstarke Funktionen für Nutzer, die ihre WhatsApp-Identität kontrollieren möchten.',
    feat1_title: 'Doppel-Upload', feat1_desc: 'Lade verschiedene Fotos für verschiedene Kontakte hoch.',
    feat2_title: 'Live-Vorschau', feat2_desc: 'Sieh genau, was jeder Kontakt sieht, bevor du wechselst.',
    feat3_title: 'Datenschutz zuerst', feat3_desc: 'Alles läuft lokal im Browser. Deine Bilder verlassen nie dein Gerät.',
    pricing_title: 'Einfache Preise', pricing_sub: 'Kostenlos starten. Upgraden wenn bereit.',
    free_label: 'Kostenlos', free_sub: 'Starten, ohne Karte', free_forever: 'für immer',
    pro_label: 'Pro', pro_sub: 'Für Power-Nutzer', pro_mo: 'pro Monat',
    annual_label: 'Jährlich', annual_sub: 'Sparen vs. monatlich', annual_yr: 'pro Jahr · ~£4,92/Monat',
    lifetime_label: 'Lebenslang', lifetime_sub: 'Einmal zahlen, immer nutzen', lifetime_once: 'einmalige Zahlung',
    badge_popular: 'BELIEBT', badge_value: 'BESTES ANGEBOT',
    feat_2contacts: 'Bis zu 2 Kontakte', feat_preview: 'Vorschaumodus', feat_p2p: 'P2P-Synchronisation',
    feat_chrome: 'Chrome & Edge', feat_unlimited: 'Unbegrenzte Kontakte',
    feat_priority: 'Prioritäts-Support', feat_future: 'Alle zukünftigen Funktionen', feat_nofee: 'Keine wiederkehrenden Gebühren',
    btn_add_chrome: 'Zu Chrome hinzufügen', btn_get_pro: 'Pro holen', btn_get_annual: 'Jährlich holen', btn_get_lifetime: 'Lebenslang holen',
    viral_title: 'Die Funktion, die WhatsApp nie gebaut hat.',
    viral_sub: 'Kostenlos starten. Funktioniert in WhatsApp Web in Chrome und Edge.',
    viral_cta: 'Zu Chrome hinzufügen — Kostenlos', viral_note: 'Kostenloser Plan enthält 2 Kontakte · Keine Kreditkarte',
    faq_title: 'Häufig gestellte Fragen', faq_sub: 'Fragen? Wir haben Antworten.',
    faq_1_q: 'Muss mein Kontakt auch etwas installieren?',
    faq_1_a: 'Ja — DualProfile funktioniert Peer-to-Peer. Wenn du ein Foto zuweist und dein Kontakt DualProfile hat, erscheint dein Foto automatisch.',
    faq_2_q: 'Funktioniert es in der mobilen WhatsApp-App?',
    faq_2_a: 'Nein — DualProfile funktioniert nur in WhatsApp Web in Chrome oder Edge auf dem Desktop.',
    faq_3_q: 'Wie funktioniert der Vorschaumodus?',
    faq_3_a: 'Der Vorschaumodus zeigt genau, was jeder Kontakt sieht, wenn er dein Profil aufruft.',
    faq_4_q: 'Sind meine Daten sicher?',
    faq_4_a: 'Absolut. Alle Fotos werden lokal auf deinem Gerät gespeichert.',
    footer_rights: 'Alle Rechte vorbehalten.',
    modal_title: 'DualProfile installieren',
    modal_sub: 'Kostenlos starten. 2 Minuten Einrichtung. Funktioniert in WhatsApp Web.',
    modal_btn: 'Zu Chrome hinzufügen — Kostenlos',
    modal_note: '🔒 Kostenloser Plan enthält 2 Kontakte. Keine Kreditkarte.',
    copied_msg: 'Kopiert!',
    footer_note: 'Keine Daten verlassen dein Gerät.',
    status_title: 'Aktueller Status',
    status_1_title: 'Vorschaumodus',
    status_1_desc: 'Sieh, wie andere dich sehen',
    status_2_title: 'P2P-Synchronisation',
    status_2_desc: 'Echtzeit-Profilwechsel jetzt live',
    status_3_title: 'Gruppenunterhaltungen',
    status_3_desc: 'Noch nicht unterstützt',
    usd_approx: '≈',
    demo_privacy: '🔒 Funktioniert vollständig in WhatsApp Web. Keine Chat-Daten werden gespeichert.',
    demo_caption: 'Sieh, wie der Vorschaumodus genau zeigt, was jeder Kontakt sieht.',
  },
  hi: {
    nav_features: 'सुविधाएँ', nav_demo: 'डेमो', nav_pricing: 'मूल्य', nav_faq: 'FAQ',
    nav_cta: 'Chrome में जोड़ें — मुफ़्त',
    live_badge: 'Chrome Web Store पर · मुफ़्त इंस्टॉल करें',
    hero_h1_1: 'लोग सालों से WhatsApp से', hero_h1_2: 'यह माँग रहे थे।',
    hero_now: 'अब यह मौजूद है।',
    hero_sub: 'अलग-अलग संपर्कों को अलग-अलग प्रोफ़ाइल फ़ोटो दिखाएँ — आपका बॉस एक देखे, दोस्त दूसरी। वही नंबर। वही WhatsApp।',
    hero_cta: 'Chrome में जोड़ें — मुफ़्त', hero_demo: 'डेमो देखें',
    reddit_title: 'जवाब हमेशा "नहीं" था।',
    reddit_sub: 'DualProfile से पहले, एकमात्र उपाय दूसरा नंबर लेना था। अब नहीं।',
    reddit_1_q: '"क्या अलग-अलग लोगों को अलग-अलग प्रोफ़ाइल फ़ोटो दिखाने का कोई तरीका है?"',
    reddit_1_a: 'शीर्ष उत्तर: नहीं।',
    reddit_2_q: '"वेब और ऐप पर अलग प्रोफ़ाइल फ़ोटो — क्या यह संभव है?"',
    reddit_2_a: 'शीर्ष उत्तर: सिर्फ़ दो फ़ोन नंबर से।',
    reddit_3_q: '"WhatsApp को कई प्रोफ़ाइल फ़ोटो का समर्थन करना चाहिए।"',
    reddit_3_a: 'शीर्ष उत्तर: [हटाया गया]',
    until_now: 'अब तक।',
    how_title: 'एक बार सेट करें। अपने आप काम करे।',
    how_sub: 'तीन चरण और हो गया — हमेशा के लिए।',
    step1_title: 'आप DualProfile इंस्टॉल करें और अपनी फ़ोटो अपलोड करें।',
    step1_sub: 'एक काम के लिए। एक जीवन के लिए।',
    step2_title: 'आप तय करें कि कौन सा संपर्क कौन सी फ़ोटो देखे।',
    step2_sub: 'लगभग 2 मिनट लगते हैं।',
    step3_title: 'वे भी इंस्टॉल करें — आपकी फ़ोटो अपने आप बदल जाती है।',
    step3_sub: 'सेटअप के बाद कोई अतिरिक्त चरण नहीं।',
    callout_text: 'DualProfile तब काम करता है जब दोनों लोगों ने इंस्टॉल किया हो। लिंक भेजें — सेटअप 3 मिनट में होता है।',
    callout_btn: 'इंस्टॉल लिंक कॉपी करें',
    features_title: 'सब कुछ जो आपको चाहिए',
    features_sub: 'उन उपयोगकर्ताओं के लिए सरल, शक्तिशाली सुविधाएँ जो WhatsApp पहचान पर नियंत्रण चाहते हैं।',
    feat1_title: 'दोहरा अपलोड', feat1_desc: 'अलग-अलग संपर्कों के लिए अलग-अलग फ़ोटो अपलोड करें।',
    feat2_title: 'लाइव पूर्वावलोकन', feat2_desc: 'बदलने से पहले देखें कि हर संपर्क क्या देखता है।',
    feat3_title: 'गोपनीयता पहले', feat3_desc: 'सब कुछ आपके ब्राउज़र में स्थानीय रूप से चलता है। आपकी छवियाँ कभी नहीं जातीं।',
    pricing_title: 'सरल मूल्य निर्धारण', pricing_sub: 'मुफ़्त शुरू करें। जब तैयार हों अपग्रेड करें।',
    free_label: 'मुफ़्त', free_sub: 'शुरू करें, कार्ड नहीं', free_forever: 'हमेशा के लिए',
    pro_label: 'Pro', pro_sub: 'पावर उपयोगकर्ताओं के लिए', pro_mo: 'प्रति माह',
    annual_label: 'वार्षिक', annual_sub: 'मासिक से बचत', annual_yr: 'प्रति वर्ष · ~£4.92/माह',
    lifetime_label: 'आजीवन', lifetime_sub: 'एक बार भुगतान, हमेशा उपयोग', lifetime_once: 'एकमुश्त भुगतान',
    badge_popular: 'लोकप्रिय', badge_value: 'सर्वोत्तम मूल्य',
    feat_2contacts: '2 संपर्क तक', feat_preview: 'पूर्वावलोकन मोड', feat_p2p: 'P2P सिंक',
    feat_chrome: 'Chrome और Edge', feat_unlimited: 'असीमित संपर्क',
    feat_priority: 'प्राथमिकता सहायता', feat_future: 'सभी भविष्य की सुविधाएँ', feat_nofee: 'कोई आवर्ती शुल्क नहीं',
    btn_add_chrome: 'Chrome में जोड़ें', btn_get_pro: 'Pro लें', btn_get_annual: 'वार्षिक लें', btn_get_lifetime: 'आजीवन लें',
    viral_title: 'वह सुविधा जो WhatsApp ने कभी नहीं बनाई।',
    viral_sub: 'मुफ़्त शुरू करें। Chrome और Edge में WhatsApp Web पर काम करता है।',
    viral_cta: 'Chrome में जोड़ें — मुफ़्त', viral_note: 'मुफ़्त योजना में 2 संपर्क · क्रेडिट कार्ड की ज़रूरत नहीं',
    faq_title: 'अक्सर पूछे जाने वाले सवाल', faq_sub: 'सवाल हैं? हमारे पास जवाब हैं।',
    faq_1_q: 'क्या मेरे संपर्क को कुछ इंस्टॉल करना होगा?',
    faq_1_a: 'हाँ — DualProfile पीयर-टू-पीयर काम करता है। जब आप फ़ोटो असाइन करते हैं और उनके पास DualProfile है, तो आपकी फ़ोटो अपने आप दिखती है।',
    faq_2_q: 'क्या यह WhatsApp मोबाइल ऐप पर काम करता है?',
    faq_2_a: 'नहीं — DualProfile केवल डेस्कटॉप पर Chrome या Edge में WhatsApp Web पर काम करता है।',
    faq_3_q: 'पूर्वावलोकन मोड कैसे काम करता है?',
    faq_3_a: 'पूर्वावलोकन मोड दिखाता है कि हर संपर्क आपका प्रोफ़ाइल देखने पर क्या देखता है।',
    faq_4_q: 'क्या मेरा डेटा सुरक्षित है?',
    faq_4_a: 'बिल्कुल। सभी फ़ोटो आपके डिवाइस पर स्थानीय रूप से संग्रहीत हैं।',
    footer_rights: 'सर्वाधिकार सुरक्षित।',
    modal_title: 'DualProfile इंस्टॉल करें',
    modal_sub: 'मुफ़्त शुरू करें। 2 मिनट सेटअप। WhatsApp Web पर काम करता है।',
    modal_btn: 'Chrome में जोड़ें — मुफ़्त',
    modal_note: '🔒 मुफ़्त योजना में 2 संपर्क। क्रेडिट कार्ड की ज़रूरत नहीं।',
    copied_msg: 'कॉपी किया!',
    footer_note: 'कोई डेटा आपके डिवाइस से नहीं जाता।',
    status_title: 'वर्तमान स्थिति',
    status_1_title: 'पूर्वावलोकन मोड',
    status_1_desc: 'देखें दूसरे आपको कैसे देखते हैं',
    status_2_title: 'P2P सिंक',
    status_2_desc: 'रीयल-टाइम प्रोफ़ाइल स्विचिंग',
    status_3_title: 'समूह चैट',
    status_3_desc: 'अभी समर्थित नहीं',
    usd_approx: '≈',
    demo_privacy: '🔒 यह पूरी तरह WhatsApp Web पर काम करता है। कोई चैट डेटा संग्रहीत नहीं होता।',
    demo_caption: 'देखें कि पूर्वावलोकन मोड दिखाता है कि प्रत्येक संपर्क वास्तव में क्या देखता है।',
  },
  zh: {
    nav_features: '功能', nav_demo: '演示', nav_pricing: '定价', nav_faq: '常见问题',
    nav_cta: '添加到 Chrome — 免费',
    live_badge: '已上线 Chrome 网上应用店 · 免费安装',
    hero_h1_1: '人们向 WhatsApp 请求这个功能', hero_h1_2: '已经多年了。',
    hero_now: '现在它来了。',
    hero_sub: '向不同联系人显示不同的个人资料照片 — 你的老板看到一张，朋友看到另一张。同一个号码。同一个 WhatsApp。',
    hero_cta: '添加到 Chrome — 免费', hero_demo: '观看演示',
    reddit_title: '答案总是"不行"。',
    reddit_sub: '在 DualProfile 出现之前，唯一的解决方案是拥有第二个号码。现在不同了。',
    reddit_1_q: '"有没有办法向不同的人显示不同的个人资料图片？"',
    reddit_1_a: '最佳答案：不行。',
    reddit_2_q: '"网页版和手机版显示不同的头像——可能吗？"',
    reddit_2_a: '最佳答案：只有拥有两个电话号码才行。',
    reddit_3_q: '"WhatsApp 应该支持多张个人资料照片。"',
    reddit_3_a: '最佳答案：[已删除]',
    until_now: '直到现在。',
    how_title: '与对方一次设置好。自动运行。',
    how_sub: '三个步骤，一劳永逸。',
    step1_title: '安装 DualProfile 并上传你的照片。',
    step1_sub: '一张用于工作，一张用于生活。',
    step2_title: '为每个联系人分配对应的照片。',
    step2_sub: '大约需要 2 分钟。',
    step3_title: '对方也安装后，你的照片自动切换。',
    step3_sub: '设置完成后无需额外操作。',
    callout_text: 'DualProfile 需要双方都安装后才能生效。发送链接给对方 — 设置只需 3 分钟。',
    callout_btn: '复制安装链接',
    features_title: '一切你所需要的',
    features_sub: '为希望掌控 WhatsApp 身份的隐私用户设计的简单而强大的功能。',
    feat1_title: '双重上传', feat1_desc: '为不同联系人上传不同的照片。',
    feat2_title: '实时预览', feat2_desc: '在切换之前准确查看每个联系人看到的内容。',
    feat3_title: '隐私优先', feat3_desc: '所有内容在浏览器本地运行。您的图像永远不会离开设备。',
    pricing_title: '简单定价', pricing_sub: '免费开始。随时升级。',
    free_label: '免费', free_sub: '无需信用卡', free_forever: '永久',
    pro_label: 'Pro', pro_sub: '高级用户', pro_mo: '每月',
    annual_label: '年度', annual_sub: '比月付更省', annual_yr: '每年 · ~£4.92/月',
    lifetime_label: '终身', lifetime_sub: '一次付款，永久使用', lifetime_once: '一次性付款',
    badge_popular: '热门', badge_value: '最佳价值',
    feat_2contacts: '最多 2 个联系人', feat_preview: '预览模式', feat_p2p: 'P2P 同步',
    feat_chrome: 'Chrome 和 Edge', feat_unlimited: '无限联系人',
    feat_priority: '优先支持', feat_future: '所有未来功能', feat_nofee: '无定期费用',
    btn_add_chrome: '添加到 Chrome', btn_get_pro: '获取 Pro', btn_get_annual: '获取年度', btn_get_lifetime: '获取终身',
    viral_title: 'WhatsApp 从未构建的功能。',
    viral_sub: '免费开始。在 Chrome 和 Edge 的 WhatsApp Web 上运行。',
    viral_cta: '添加到 Chrome — 免费', viral_note: '免费计划包含 2 个联系人 · 无需信用卡',
    faq_title: '常见问题', faq_sub: '有疑问？我们有解答。',
    faq_1_q: '我的联系人需要安装什么吗？',
    faq_1_a: '是的 — DualProfile 采用点对点方式运行。当您为联系人分配照片且对方安装了 DualProfile 后，您的照片会自动出现在对方屏幕上。',
    faq_2_q: '这在 WhatsApp 手机应用上有效吗？',
    faq_2_a: '不 — DualProfile 仅在桌面版 Chrome 或 Edge 的 WhatsApp Web 上运行。',
    faq_3_q: '预览模式如何工作？',
    faq_3_a: '预览模式准确显示每个联系人查看您个人资料时看到的内容。',
    faq_4_q: '我的数据安全吗？',
    faq_4_a: '绝对安全。所有照片都存储在您的本地设备上。',
    footer_rights: '保留所有权利。',
    modal_title: '安装 DualProfile',
    modal_sub: '免费开始。2 分钟设置。在 WhatsApp Web 上运行。',
    modal_btn: '添加到 Chrome — 免费',
    modal_note: '🔒 免费计划包含 2 个联系人。无需信用卡。',
    copied_msg: '已复制！',
    footer_note: '数据不离开您的设备。',
    status_title: '当前状态',
    status_1_title: '预览模式',
    status_1_desc: '查看他人如何看到您的资料',
    status_2_title: 'P2P同步',
    status_2_desc: '实时个人资料切换已上线',
    status_3_title: '群聊',
    status_3_desc: '暂不支持',
    usd_approx: '≈',
    demo_privacy: '🔒 完全在 WhatsApp Web 上运行。不存储任何聊天数据。',
    demo_caption: '查看预览模式如何准确显示每个联系人看到的内容。',
  },
  ja: {
    nav_features: '機能', nav_demo: 'デモ', nav_pricing: '料金', nav_faq: 'よくある質問',
    nav_cta: 'Chromeに追加 — 無料',
    live_badge: 'Chrome ウェブストアで公開中 · 無料インストール',
    hero_h1_1: '人々はずっと', hero_h1_2: 'WhatsAppにこれを求めてきました。',
    hero_now: '今、それが存在します。',
    hero_sub: '異なる連絡先に異なるプロフィール写真を表示 — 上司には一枚、友達には別の一枚。同じ番号。同じWhatsApp。',
    hero_cta: 'Chromeに追加 — 無料', hero_demo: 'デモを見る',
    reddit_title: '答えはいつも「できない」でした。',
    reddit_sub: 'DualProfile以前、唯一の解決策は2つ目の番号を持つことでした。もうそれは不要です。',
    reddit_1_q: '"異なる人に異なるプロフィール写真を表示する方法はありますか？"',
    reddit_1_a: 'ベストアンサー：できません。',
    reddit_2_q: '"ウェブとアプリで異なるプロフィール写真 — 可能ですか？"',
    reddit_2_a: 'ベストアンサー：2つの電話番号があれば。',
    reddit_3_q: '"WhatsAppは複数のプロフィール写真をサポートすべきです。"',
    reddit_3_a: 'ベストアンサー：[削除済み]',
    until_now: '今まではそうでした。',
    how_title: '一度設定すれば、自動で動作します。',
    how_sub: '3ステップで完了 — ずっと使えます。',
    step1_title: 'DualProfileをインストールし、写真をアップロードします。',
    step1_sub: '仕事用に一枚。プライベート用に一枚。',
    step2_title: '各連絡先にどの写真を見せるか割り当てます。',
    step2_sub: '約2分で完了します。',
    step3_title: '相手もインストールすれば、写真が自動で切り替わります。',
    step3_sub: '設定後は追加の手順不要。',
    callout_text: 'DualProfileは両方がインストールしているときに機能します。リンクを送って — セットアップは3分です。',
    callout_btn: 'インストールリンクをコピー',
    features_title: '必要なすべてが揃っています',
    features_sub: 'WhatsAppのアイデンティティをコントロールしたいプライバシー意識の高いユーザー向けの機能。',
    feat1_title: 'デュアルアップロード', feat1_desc: '異なる連絡先に異なる写真をアップロードできます。',
    feat2_title: 'ライブプレビュー', feat2_desc: '切り替える前に各連絡先が見る内容を正確に確認できます。',
    feat3_title: 'プライバシー優先', feat3_desc: 'すべてブラウザ内でローカルに実行されます。画像がデバイスを離れることはありません。',
    pricing_title: 'シンプルな料金', pricing_sub: '無料で始めましょう。準備ができたらアップグレード。',
    free_label: '無料', free_sub: 'カード不要で開始', free_forever: '永久',
    pro_label: 'Pro', pro_sub: 'パワーユーザー向け', pro_mo: '月額',
    annual_label: '年間', annual_sub: '月払いよりお得', annual_yr: '年額 · ~£4.92/月',
    lifetime_label: '生涯', lifetime_sub: '一度払ってずっと使える', lifetime_once: '一括払い',
    badge_popular: '人気', badge_value: '最もお得',
    feat_2contacts: '最大2連絡先', feat_preview: 'プレビューモード', feat_p2p: 'P2P同期',
    feat_chrome: 'ChromeとEdge', feat_unlimited: '無制限の連絡先',
    feat_priority: '優先サポート', feat_future: '将来の全機能', feat_nofee: '継続課金なし',
    btn_add_chrome: 'Chromeに追加', btn_get_pro: 'Proを取得', btn_get_annual: '年間を取得', btn_get_lifetime: '生涯を取得',
    viral_title: 'WhatsAppが作らなかった機能。',
    viral_sub: '無料で始められます。ChromeとEdgeのWhatsApp Webで動作します。',
    viral_cta: 'Chromeに追加 — 無料', viral_note: '無料プランには2連絡先が含まれます · クレジットカード不要',
    faq_title: 'よくある質問', faq_sub: '質問がありますか？答えがあります。',
    faq_1_q: '連絡先も何かインストールする必要がありますか？',
    faq_1_a: 'はい — DualProfileはピアツーピアで動作します。写真を割り当てた連絡先がDualProfileをインストールすると、あなたの写真が自動的に表示されます。',
    faq_2_q: 'WhatsAppモバイルアプリで動作しますか？',
    faq_2_a: 'いいえ — DualProfileはデスクトップのChromeまたはEdgeのWhatsApp Webでのみ動作します。',
    faq_3_q: 'プレビューモードはどのように機能しますか？',
    faq_3_a: 'プレビューモードは、各連絡先があなたのプロフィールを見たときに表示される内容を正確に示します。',
    faq_4_q: 'データは安全ですか？',
    faq_4_a: 'もちろんです。すべての写真はデバイスにローカルで保存されます。',
    footer_rights: '全著作権所有。',
    modal_title: 'DualProfileをインストール',
    modal_sub: '無料で始められます。2分でセットアップ。WhatsApp Webで動作します。',
    modal_btn: 'Chromeに追加 — 無料',
    modal_note: '🔒 無料プランには2連絡先が含まれます。クレジットカード不要。',
    copied_msg: 'コピーしました！',
    footer_note: 'データはデバイスを離れません。',
    status_title: '現在のステータス',
    status_1_title: 'プレビューモード',
    status_1_desc: '他のユーザーからどう見えるか確認',
    status_2_title: 'P2P同期',
    status_2_desc: 'リアルタイムプロフィール切り替え',
    status_3_title: 'グループチャット',
    status_3_desc: 'まだサポートされていません',
    usd_approx: '≈',
    demo_privacy: '🔒 これは完全にWhatsApp Webで動作します。チャットデータは保存されません。',
    demo_caption: 'プレビューモードが各連絡先に見える内容を正確に表示する様子をご覧ください。',
  },
  ru: {
    nav_features: 'Функции', nav_demo: 'Демо', nav_pricing: 'Цены', nav_faq: 'FAQ',
    nav_cta: 'Добавить в Chrome — Бесплатно',
    live_badge: 'В Chrome Web Store · Бесплатная установка',
    hero_h1_1: 'Люди годами просили', hero_h1_2: 'WhatsApp об этом.',
    hero_now: 'Теперь это существует.',
    hero_sub: 'Показывайте разным контактам разные фото профиля — начальник видит одно, друзья — другое. Тот же номер. Тот же WhatsApp.',
    hero_cta: 'Добавить в Chrome — Бесплатно', hero_demo: 'Смотреть демо',
    reddit_title: 'Ответ всегда был «нет».',
    reddit_sub: 'До DualProfile единственным решением было получить второй номер. Теперь нет.',
    reddit_1_q: '"Есть ли способ показывать разным людям разные фото профиля?"',
    reddit_1_a: 'Лучший ответ: Нет.',
    reddit_2_q: '"Разное фото профиля в веб-версии и приложении — возможно ли это?"',
    reddit_2_a: 'Лучший ответ: Только если у вас два номера телефона.',
    reddit_3_q: '"WhatsApp должен поддерживать несколько фото профиля."',
    reddit_3_a: 'Лучший ответ: [удалено]',
    until_now: 'До сегодняшнего дня.',
    how_title: 'Настройте один раз. Работает автоматически.',
    how_sub: 'Три шага — и готово навсегда.',
    step1_title: 'Установите DualProfile и загрузите свои фото.',
    step1_sub: 'Одно для работы. Одно для жизни.',
    step2_title: 'Назначьте, какое фото видит каждый контакт.',
    step2_sub: 'Занимает около 2 минут.',
    step3_title: 'Они тоже устанавливают — ваше фото меняется автоматически.',
    step3_sub: 'После настройки дополнительных шагов не нужно.',
    callout_text: 'DualProfile работает, когда оба установили расширение. Отправьте ссылку — настройка займёт 3 минуты.',
    callout_btn: 'Скопировать ссылку для установки',
    features_title: 'Всё что нужно',
    features_sub: 'Простые и мощные функции для пользователей, которые хотят контролировать свою идентичность в WhatsApp.',
    feat1_title: 'Двойная загрузка', feat1_desc: 'Загружайте разные фото для разных контактов.',
    feat2_title: 'Предпросмотр в реальном времени', feat2_desc: 'Смотрите, что видит каждый контакт, до переключения.',
    feat3_title: 'Приватность прежде всего', feat3_desc: 'Всё работает локально в браузере. Ваши изображения никогда не покидают устройство.',
    pricing_title: 'Простые цены', pricing_sub: 'Начните бесплатно. Обновитесь когда будете готовы.',
    free_label: 'Бесплатно', free_sub: 'Начните без карты', free_forever: 'навсегда',
    pro_label: 'Pro', pro_sub: 'Для продвинутых пользователей', pro_mo: 'в месяц',
    annual_label: 'Годовой', annual_sub: 'Экономия по сравнению с ежемесячным', annual_yr: 'в год · ~£4,92/мес',
    lifetime_label: 'Пожизненный', lifetime_sub: 'Платите один раз, пользуйтесь всегда', lifetime_once: 'единовременный платёж',
    badge_popular: 'ПОПУЛЯРНЫЙ', badge_value: 'ЛУЧШАЯ ЦЕНА',
    feat_2contacts: 'До 2 контактов', feat_preview: 'Режим предпросмотра', feat_p2p: 'P2P-синхронизация',
    feat_chrome: 'Chrome и Edge', feat_unlimited: 'Неограниченные контакты',
    feat_priority: 'Приоритетная поддержка', feat_future: 'Все будущие функции', feat_nofee: 'Без регулярных платежей',
    btn_add_chrome: 'Добавить в Chrome', btn_get_pro: 'Получить Pro', btn_get_annual: 'Получить Годовой', btn_get_lifetime: 'Получить Пожизненный',
    viral_title: 'Функция, которую WhatsApp так и не создал.',
    viral_sub: 'Бесплатно для начала. Работает в WhatsApp Web в Chrome и Edge.',
    viral_cta: 'Добавить в Chrome — Бесплатно', viral_note: 'Бесплатный план включает 2 контакта · Без кредитной карты',
    faq_title: 'Часто задаваемые вопросы', faq_sub: 'Есть вопросы? У нас есть ответы.',
    faq_1_q: 'Нужно ли моему контакту что-то устанавливать?',
    faq_1_a: 'Да — DualProfile работает по принципу P2P. Когда вы назначаете фото контакту и у него установлен DualProfile, ваше фото появляется на его экране автоматически.',
    faq_2_q: 'Работает ли это в мобильном приложении WhatsApp?',
    faq_2_a: 'Нет — DualProfile работает только в WhatsApp Web в Chrome или Edge на компьютере.',
    faq_3_q: 'Как работает режим предпросмотра?',
    faq_3_a: 'Режим предпросмотра показывает, что именно видит каждый контакт при просмотре вашего профиля.',
    faq_4_q: 'Мои данные в безопасности?',
    faq_4_a: 'Абсолютно. Все фото хранятся локально на вашем устройстве.',
    footer_rights: 'Все права защищены.',
    modal_title: 'Установить DualProfile',
    modal_sub: 'Бесплатно для начала. 2 минуты настройки. Работает в WhatsApp Web.',
    modal_btn: 'Добавить в Chrome — Бесплатно',
    modal_note: '🔒 Бесплатный план включает 2 контакта. Без кредитной карты.',
    footer_note: 'Данные не покидают ваше устройство.',
    demo_privacy: '🔒 Работает полностью в WhatsApp Web. Данные чатов не хранятся.',
    demo_caption: 'Посмотрите, как режим предпросмотра показывает именно то, что видит каждый контакт.',
    copied_msg: 'Скопировано!',
    status_title: 'Текущий статус',
    status_1_title: 'Режим предпросмотра',
    status_1_desc: 'Смотрите, как вас видят другие',
    status_2_title: 'P2P-синхронизация',
    status_2_desc: 'Переключение профиля в реальном времени',
    status_3_title: 'Групповые чаты',
    status_3_desc: 'Пока не поддерживается',
    usd_approx: '≈',
  },
};

const LANG_OPTIONS = [
  { code: 'en', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1ec-1f1e7.svg', label: 'EN' },
  { code: 'es', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1ea-1f1f8.svg', label: 'ES' },
  { code: 'fr', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1eb-1f1f7.svg', label: 'FR' },
  { code: 'pt', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1e7-1f1f7.svg', label: 'PT' },
  { code: 'de', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1e9-1f1ea.svg', label: 'DE' },
  { code: 'hi', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1ee-1f1f3.svg', label: 'HI' },
  { code: 'zh', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1e8-1f1f3.svg', label: 'ZH' },
  { code: 'ja', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1ef-1f1f5.svg', label: 'JA' },
  { code: 'ru', flag: 'https://twemoji.maxcdn.com/v/latest/svg/1f1f7-1f1fa.svg', label: 'RU' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, title: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lang, setLang] = useState('en');

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => setToast({ show: false, title: '', message: '' }), 4000);
  };

  useEffect(() => {
    const saved = localStorage.getItem('dp_site_lang') || navigator.language?.slice(0,2) || 'en';
    const valid = Object.keys(LANGS);
    setLang(valid.includes(saved) ? saved : 'en');
  }, []);

  const t = (key: string) => (LANGS[lang] && LANGS[lang][key]) || LANGS['en'][key] || key;

  const changeLang = (code: string) => {
    setLang(code);
    localStorage.setItem('dp_site_lang', code);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    // Detect ConvertKit form success
    const observer = new MutationObserver(() => {
      if (document.querySelector('.ck-form-success')) {
        setEmail('');
        setIsModalOpen(false);
        showToast("You're on the list! 🎉", "We'll notify you as soon as DualProfile is ready.");
      }
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const faqs = [
    { question: t('faq_1_q'), answer: t('faq_1_a') },
    { question: t('faq_2_q'), answer: t('faq_2_a') },
    { question: t('faq_3_q'), answer: t('faq_3_a') },
    { question: t('faq_4_q'), answer: t('faq_4_a') },
  ];

  return (
    <>
      <Head>
        <title>DualProfile — Show Different WhatsApp Photos to Different People</title>
        <meta name="description" content="Your boss sees your professional photo. Your friends see the real you. DualProfile lets you assign different profile photos to different WhatsApp contacts. Free Chrome extension." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vivaup.org/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vivaup.org/" />
        <meta property="og:title" content="DualProfile — Show Different WhatsApp Photos to Different People" />
        <meta property="og:description" content="Your boss sees your professional photo. Your friends see the real you. Free Chrome extension for WhatsApp Web." />
        <meta property="og:image" content="https://img.youtube.com/vi/mt8QzcG0_XQ/maxresdefault.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DualProfile — Show Different WhatsApp Photos to Different People" />
        <meta name="twitter:description" content="Your boss sees your professional photo. Your friends see the real you. Free Chrome extension for WhatsApp Web." />
        <meta name="twitter:image" content="https://img.youtube.com/vi/mt8QzcG0_XQ/maxresdefault.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "DualProfile",
          "url": "https://vivaup.org",
          "description": "Show different WhatsApp profile photos to different contacts. Your boss sees your professional photo, your friends see the real you. Free Chrome extension for WhatsApp Web.",
          "applicationCategory": "BrowserApplication",
          "operatingSystem": "Chrome, Edge",
          "offers": [
            { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "GBP" },
            { "@type": "Offer", "name": "Pro", "price": "9.99", "priceCurrency": "GBP", "billingIncrement": "P1M" },
            { "@type": "Offer", "name": "Annual", "price": "59.00", "priceCurrency": "GBP", "billingIncrement": "P1Y" },
            { "@type": "Offer", "name": "Lifetime", "price": "79.00", "priceCurrency": "GBP" }
          ],
          "featureList": [
            "Show different profile photos to different WhatsApp contacts",
            "Assign professional photo to work contacts",
            "Assign casual photo to personal contacts",
            "Peer-to-peer sync — no server storage",
            "Works on WhatsApp Web in Chrome and Edge"
          ],
          "installUrl": "https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc",
          "screenshot": "https://vivaup.org/dualprofile-logo.png",
          "video": {
            "@type": "VideoObject",
            "name": "DualProfile: Multiple WhatsApp Profile Photos (Control Who Sees What)",
            "description": "See how DualProfile lets you show different WhatsApp profile photos to different contacts — your boss sees your professional photo, your friends see the real you.",
            "thumbnailUrl": "https://img.youtube.com/vi/mt8QzcG0_XQ/maxresdefault.jpg",
            "uploadDate": "2026-05-01",
            "contentUrl": "https://www.youtube.com/watch?v=mt8QzcG0_XQ",
            "embedUrl": "https://www.youtube.com/embed/mt8QzcG0_XQ"
          }
        })}} />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script async data-uid="45b1efe5a4" src="https://dualprofile.kit.com/45b1efe5a4/index.js" />
      </Head>

      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <img src="/dualprofile-logo.png" alt="DualProfile Logo" width="32" height="32" />
              <span>DualProfile</span>
            </div>
            <div className="nav-links">
              <a href="#features">{t('nav_features')}</a>
              <a href="#demo">{t('nav_demo')}</a>
              <a href="#pricing">{t('nav_pricing')}</a>
              <a href="#faq">{t('nav_faq')}</a>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{display:'flex',gap:'3px',flexWrap:'wrap' as const}}>
                {LANG_OPTIONS.map(l => (
                  <button key={l.code} onClick={() => changeLang(l.code)} style={{
                    background: lang === l.code ? 'rgba(37,211,102,0.15)' : 'rgba(255,255,255,0.04)',
                    border: lang === l.code ? '1px solid rgba(37,211,102,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    color: lang === l.code ? '#25D366' : '#6b7280',
                    borderRadius: '20px', padding: '3px 7px', cursor: 'pointer',
                    fontSize: '10px', fontWeight: '700', fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', gap: '3px',
                    transition: 'all 0.15s ease'
                  }}>
                    <img src={l.flag} alt={l.label} width="14" height="14" style={{display:'inline-block',verticalAlign:'middle',marginRight:'2px'}} /><span>{l.label}</span>
                  </button>
                ))}
              </div>
              <a href="https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc" target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('nav_cta')}
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            {/* P2P Hook - PRIMARY MESSAGE */}
            <div className="p2p-hook" style={{
              background: 'rgba(37,211,102,0.12)',
              color: '#25D366',
              border: '1px solid rgba(37,211,102,0.3)',
              padding: '10px 22px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: 'clamp(13px, 2vw, 15px)',
              marginBottom: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.2px'
            }}>
              <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'#25D366',display:'inline-block',boxShadow:'0 0 6px #25D366'}}></span>
              {t('live_badge')}
            </div>
            
            {/* Main Headline */}
            <h1 className="hero-title" style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '16px'
            }}>
              {t('hero_h1_1')}<br />{t('hero_h1_2')}<br />
              <span style={{fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: '600', color: '#25D366'}}>
                {t('hero_now')}
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="hero-subtitle" style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '32px',
              opacity: '0.9'
            }}>
              {t('hero_sub')}
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-buttons" style={{marginBottom: '24px'}}>
              <button 
                className="btn btn-outline btn-lg btn-primary"
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  padding: '16px 32px',
                  minWidth: '280px',
                  marginRight: '16px'
                }}
              >
                {t('hero_cta')}
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  padding: '16px 32px',
                  minWidth: '200px'
                }}
              >
                {t('hero_demo')}
              </button>
            </div>
          </div>
        </section>

        {/* Demo Section - Fixed Video Embed */}
        <section id="demo" className="demo">
          <div className="demo-container">
            <div className="demo-video-wrapper">
              <div style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
                <iframe
                  src="https://www.youtube.com/embed/mt8QzcG0_XQ?rel=0&modestbranding=1&autoplay=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px'
                  }}
                ></iframe>
              </div>
            </div>
            <div className="trust-statement" style={{
              background: 'rgba(37, 211, 102, 0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '14px'
            }}>
              {t('demo_privacy')}
            </div>
            <p className="demo-caption" style={{
              marginTop: '12px',
              fontSize: '16px',
              opacity: '0.8',
              textAlign: 'center'
            }}>
              {t('demo_caption')}
            </p>
          </div>
        </section>

        {/* Viral Hook Section - NEW */}
        <section id="viral-hook" className="viral-hook" style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.1) 100%)',
          textAlign: 'center'
        }}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="viral-message" style={{
              marginBottom: '40px'
            }}>
              <h2 className="viral-headline" style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: '700',
                marginBottom: '24px',
                lineHeight: '1.1',
                color: 'var(--foreground, #ffffff)'
              }}>
                {t('viral_title')}
              </h2>
              <div className="viral-subheadline" style={{
                fontSize: 'clamp(18px, 3vw, 24px)',
                color: '#9ca3af',
                marginBottom: '32px',
              }}>
                {t('viral_sub')}
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
                style={{
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  padding: '20px 40px',
                  minWidth: '300px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
                }}
              >
                {t('viral_cta')}
              </button>
              <p style={{marginTop:'12px',fontSize:'14px',color:'#6b7280'}}>{t('viral_note')}</p>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('reddit_title')}</h2>
              <p className="section-subtitle">{t('reddit_sub')}</p>
            </div>
            <div className="reddit-posts-grid">
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">9 years ago</span>
                  </div>
                  <div className="post-stats">6 upvotes · 7 comments</div>
                </div>
                <div className="post-content">
                  <h4>{t('reddit_1_q')}</h4>
                  <div className="reddit-answer">{t('reddit_1_a')}</div>
                </div>
              </div>
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">5 years ago</span>
                  </div>
                  <div className="post-stats">7 upvotes · 3 comments</div>
                </div>
                <div className="post-content">
                  <h4>{t('reddit_2_q')}</h4>
                  <div className="reddit-answer">{t('reddit_2_a')}</div>
                </div>
              </div>
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">8 months ago</span>
                  </div>
                  <div className="post-stats">9 upvotes · 3 comments</div>
                </div>
                <div className="post-content">
                  <h4>{t('reddit_3_q')}</h4>
                  <div className="reddit-answer">{t('reddit_3_a')}</div>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(37,211,102,0.2)'}}>
              <span style={{fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#25D366', letterSpacing: '-0.5px'}}>{t('until_now')}</span>
              <div style={{marginTop: '24px'}}>
                <button className="btn btn-primary" onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')} style={{fontSize: '18px', padding: '14px 32px'}}>
                  {t('hero_cta')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('how_title')}</h2>
              <p className="section-subtitle">{t('how_sub')}</p>
            </div>
            <div className="steps-grid">
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">1</div>
                <h3 className="step-title">{t('step1_title')}</h3>
                <p className="step-description">{t('step1_sub')}</p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">2</div>
                <h3 className="step-title">{t('step2_title')}</h3>
                <p className="step-description">{t('step2_sub')}</p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">3</div>
                <h3 className="step-title">{t('step3_title')}</h3>
                <p className="step-description">{t('step3_sub')}</p>
              </div>
            </div>
            <div style={{marginTop: '48px', background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: '16px', padding: '28px 32px', display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'space-between', gap: '16px'}}>
              <p style={{margin: 0, color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', flex: '1 1 300px'}}>
                {t('callout_text')}
              </p>
              <button style={{background: 'transparent', border: '1px solid rgba(37,211,102,0.5)', color: '#25D366', padding: '10px 24px', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' as const, transition: 'all 0.2s ease', flexShrink: 0}}
                onClick={() => { navigator.clipboard.writeText('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc'); const btn = document.activeElement as HTMLButtonElement; if (btn) { btn.textContent = t('copied_msg') || 'Copied!'; setTimeout(() => { btn.textContent = t('callout_btn') || 'Copy install link'; }, 2500); } }}>
                {t('callout_btn')}
              </button>
            </div>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="current-status">
          <div className="container">
            <div className="status-card glass-card">
              <h2 className="status-title">{t('status_title')}</h2>
              <div className="status-grid">
                <div className="status-item">
                  <div className="status-icon available">✓</div>
                  <div className="status-text">
                    <strong>{t('status_1_title')}</strong>
                    <p>{t('status_1_desc')}</p>
                  </div>
                </div>
                <div className="status-item">
                  <div className="status-icon available">✓</div>
                  <div className="status-text">
                    <strong>{t('status_2_title')}</strong>
                    <p>{t('status_2_desc')}</p>
                  </div>
                </div>
                <div className="status-item">
                  <div className="status-icon not-available">—</div>
                  <div className="status-text">
                    <strong>{t('status_3_title')}</strong>
                    <p>{t('status_3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('features_title')}</h2>
              <p className="section-subtitle">
                {t('features_sub')}
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="feature-title">{t('feat1_title')}</h3>
                <p className="feature-description">{t('feat1_desc')}</p>
              </div>
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="feature-title">{t('feat2_title')}</h3>
                <p className="feature-description">
                  {t('feat2_desc')}
                </p>
              </div>
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="feature-title">{t('feat3_title')}</h3>
                <p className="feature-description">{t('feat3_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="features" style={{paddingTop: '2rem'}}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('pricing_title')}</h2>
              <p className="section-subtitle">{t('pricing_sub')}</p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {/* Free */}
              <div className="glass-card" style={{padding: '2rem', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('free_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>{t('free_sub')}</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£0</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>{t('free_forever')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {[t('feat_2contacts'), t('feat_preview'), t('feat_p2p'), t('feat_chrome')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  {t('btn_add_chrome')}
                </button>
              </div>

              {/* Pro */}
              <div className="glass-card glow-primary" style={{
                padding: '2rem', textAlign: 'center',
                border: '1px solid rgba(37,211,102,0.4)', position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: '#25D366', color: '#000',
                  fontSize: '0.75rem', fontWeight: '700',
                  padding: '4px 14px', borderBottomLeftRadius: '8px', borderTopRightRadius: '12px'
                }}>{ t('badge_popular')}</div>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('pro_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>{t('pro_sub')}</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.1rem'}}>£9.99</div>
                <div style={{fontSize: '0.78rem', color: '#6b7280', marginBottom: '0.25rem'}}>≈ $12.50 USD</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>{t('pro_mo')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {[t('feat_unlimited'), t('feat_preview'), t('feat_p2p'), t('feat_priority'), t('feat_future')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{width: '100%'}}
                  onClick={() => window.open('https://wadualpic.lemonsqueezy.com/checkout/buy/b1aa498c-ba28-4e4a-a5b9-ac6ea0b6381c', '_blank')}>
                  {t('btn_get_pro')}
                </button>
              </div>

              {/* Annual */}
              <div className="glass-card" style={{
                padding: '2rem', textAlign: 'center',
                border: '1px solid rgba(37,211,102,0.2)', position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'rgba(37,211,102,0.15)', color: '#25D366',
                  fontSize: '0.75rem', fontWeight: '700',
                  padding: '4px 14px', borderBottomLeftRadius: '8px', borderTopRightRadius: '12px'
                }}>{ t('badge_value')}</div>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('annual_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>{t('annual_sub')}</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.1rem'}}>£59</div>
                <div style={{fontSize: '0.78rem', color: '#6b7280', marginBottom: '0.25rem'}}>≈ $74 USD</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>{t('annual_yr')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {[t('feat_unlimited'), t('feat_preview'), t('feat_p2p'), t('feat_priority'), t('feat_future')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://wadualpic.lemonsqueezy.com/checkout/buy/eedf7e9a-3865-4dd5-934f-a81f0d9a2202', '_blank')}>
                  {t('btn_get_annual')}
                </button>
              </div>

              {/* Lifetime */}
              <div className="glass-card" style={{padding: '2rem', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('lifetime_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>{t('lifetime_sub')}</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.1rem'}}>£79</div>
                <div style={{fontSize: '0.78rem', color: '#6b7280', marginBottom: '0.25rem'}}>≈ $99 USD</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>{t('lifetime_once')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {[t('feat_unlimited'), t('feat_preview'), t('feat_p2p'), t('feat_priority'), t('feat_future'), t('feat_nofee')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://wadualpic.lemonsqueezy.com/checkout/buy/4f5df750-a085-44a6-8cdd-690b92bd80b1', '_blank')}>
                  {t('btn_get_lifetime')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="early-access" className="early-access">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('viral_title')}</h2>
              <p className="section-subtitle">
                {t('viral_sub')}
              </p>
            </div>
            <div className="early-access-card glass-card">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
              >
                {t('viral_cta')}
              </button>
              <p style={{marginTop: '12px', fontSize: '14px', color: '#9ca3af'}}>
                {t('viral_note')}
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('faq_title')}</h2>
              <p className="section-subtitle">{t('faq_sub')}</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item glass-card ${openFaq === index ? 'open' : ''}`}>
                  <button 
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className="faq-chevron" 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>© 2026 DualProfile. {t('footer_rights')}</p>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="mailto:edwin.dualprofile@gmail.com" className="footer-link">Support</a>
              </div>
              <p className="footer-note">{t('footer_note')}</p>
            </div>
          </div>
        </footer>

        {/* Waitlist Modal */}
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="modal-title">{t('modal_title')}</h2>
            <p className="modal-subtitle">{t('modal_sub')}</p>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank');
                setIsModalOpen(false);
                showToast("Opening Chrome Web Store...", "Add DualProfile to Chrome to get started.");
              }}
            >
              {t('modal_btn')}
            </button>
            <p className="modal-privacy">{t('modal_note')}</p>
          </div>
        </div>

        {/* Toast Notification */}
        <div className={`toast ${toast.show ? 'show' : ''}`}>
          <span className="toast-title">{toast.title}</span>
          <span className="toast-message">{toast.message}</span>
        </div>
      </div>

      <style jsx global>{`
        /* CSS Variables - Design System */
        :root {
          --background: hsl(200, 20%, 10%);
          --foreground: hsl(0, 0%, 98%);
          --card: hsl(200, 18%, 13%);
          --card-foreground: hsl(0, 0%, 98%);
          --primary: hsl(145, 63%, 49%);
          --primary-foreground: hsl(200, 20%, 10%);
          --secondary: hsl(200, 15%, 18%);
          --secondary-foreground: hsl(0, 0%, 98%);
          --muted: hsl(200, 15%, 18%);
          --muted-foreground: hsl(200, 10%, 60%);
          --accent: hsl(145, 63%, 49%);
          --accent-foreground: hsl(200, 20%, 10%);
          --border: hsl(200, 15%, 20%);
          --input: hsl(200, 15%, 20%);
          --ring: hsl(145, 63%, 49%);
          --radius: 0.75rem;
        }

        /* Global Reset & Background */
        html, body {
          background-color: #0b0b0f;
          color: #ffffff;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Reset & Base */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: auto;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Hide ConvertKit's success message */
        .ck-success-message {
          display: none !important;
        }

        /* Social Proof */
        .social-proof {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .social-proof-text {
          font-size: 1.125rem;
          color: #d1d5db;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .proof-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .proof-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        /* Hero Status */
        .hero-status {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .status-badge {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-text {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Demo Section */
        .demo {
          padding: 4rem 0;
        }

        .demo-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .demo-video-wrapper {
          margin-bottom: 2rem;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .trust-statement {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        /* Social Proof Section */
        .social-proof-section {
          padding: 6rem 0;
          background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.05), transparent);
        }

        .reddit-posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .reddit-post {
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .reddit-post:hover {
          transform: translateY(-2px);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .reddit-post::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #ff4500, #ff6b35);
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .post-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .subreddit {
          color: #ff4500;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .post-date {
          color: var(--muted-foreground);
          font-size: 0.75rem;
        }

        .post-stats {
          color: var(--muted-foreground);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .post-content h4 {
          color: var(--foreground);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .post-content p {
          color: var(--muted-foreground);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .reddit-answer {
          background: rgba(255, 69, 0, 0.1);
          color: #ff6b35;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-left: 3px solid #ff4500;
        }

        /* How It Works */
        .how-it-works {
          padding: 6rem 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .step-card {
          text-align: center;
          padding: 2rem;
          position: relative;
        }

        .step-number {
          width: 3rem;
          height: 3rem;
          background: var(--primary);
          color: var(--primary-foreground);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .step-description {
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Current Status */
        .current-status {
          padding: 4rem 0;
        }

        .status-card {
          padding: 2rem;
          text-align: center;
        }

        .status-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .status-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .status-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .status-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .status-icon.available {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .status-icon.coming-soon {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .status-icon.not-available {
          background: rgba(107, 114, 128, 0.2);
          color: #6b7280;
        }

        .status-text strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .status-text p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }

        /* Feature Comparison Table */
        .comparison-table {
          margin: 3rem 0;
          overflow-x: auto;
        }

        .comparison-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 2px solid var(--border);
        }

        .feature-column {
          font-weight: 700;
          color: var(--foreground);
        }

        .plan-column {
          text-align: center;
        }

        .plan-name {
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
        }

        .plan-price span {
          font-size: 0.875rem;
          font-weight: 400;
          color: #9ca3af;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(107, 114, 128, 0.2);
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .feature-name {
          color: var(--foreground);
          font-weight: 500;
        }

        .feature-value {
          text-align: center;
          font-weight: 600;
        }

        .feature-value:nth-child(2) {
          color: #9ca3af;
        }

        .feature-value:nth-child(3),
        .feature-value:nth-child(4) {
          color: var(--primary);
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          padding: 2rem;
          text-align: center;
          position: relative;
        }

        .pricing-card.featured {
          transform: scale(1.05);
        }

        .pricing-header {
          margin-bottom: 2rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .pricing-subtitle {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        .pricing-amount {
          margin-bottom: 1rem;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary);
        }

        .currency {
          font-size: 1rem;
          color: #9ca3af;
        }

        .pricing-alternative {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .pricing-benefits {
          text-align: left;
          margin-bottom: 2rem;
        }

        .pricing-benefits ul {
          list-style: none;
        }

        .pricing-benefits li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(107, 114, 128, 0.2);
        }

        .pricing-benefits li:last-child {
          border-bottom: none;
        }

        .check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        /* FAQ */
        .faq {
          padding: 6rem 0;
        }

        .faq-list {
          margin-top: 3rem;
        }

        .faq-item {
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          color: inherit;
        }

        .faq-trigger span {
          font-weight: 600;
        }

        .faq-chevron {
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-content {
          max-height: 500px;
        }

        .faq-content p {
          padding: 0 1.5rem 1.5rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid rgba(107, 114, 128, 0.2);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
          line-height: 1.2;
          font-weight: 700;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* Utility Classes */
        .text-primary {
          color: var(--primary);
        }

        .glass-card {
          background: hsla(200, 18%, 13%, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid hsla(200, 15%, 20%, 0.5);
          border-radius: var(--radius);
        }

        .glow-primary {
          box-shadow: 0 0 30px hsla(145, 63%, 49%, 0.2);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary {
          background-color: var(--primary);
          color: var(--primary-foreground);
        }

        .btn-primary:hover {
          background-color: hsl(145, 63%, 44%);
          transform: translateY(-1px);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--border);
        }

        .btn-outline:hover {
          background-color: var(--secondary);
          border-color: var(--primary);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background-color: var(--secondary);
          border-color: var(--primary);
          transform: translateY(-1px);
        }

        .btn-lg {
          font-size: 1.125rem;
          padding: 1rem 2rem;
        }

        .btn-full {
          width: 100%;
        }

        /* Navbar */
        .lang-switcher {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          align-items: center;
          margin-left: 8px;
        }
        .lang-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 3px 7px;
          font-size: 10px;
          font-weight: 700;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 3px;
          white-space: nowrap;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .lang-btn .flag {
          font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Android Emoji', sans-serif;
          font-size: 13px;
          line-height: 1;
          display: inline-block;
        }
        .lang-btn:hover {
          border-color: rgba(37,211,102,0.4);
          color: #d1d5db;
          background: rgba(255,255,255,0.05);
        }
        .lang-btn.active {
          border-color: rgba(37,211,102,0.5);
          background: rgba(37,211,102,0.1);
          color: #25D366;
        }
        @media (max-width: 768px) {
          .lang-switcher { 
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
            justify-content: center;
            padding: 8px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: hsla(200, 20%, 10%, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid hsla(200, 15%, 20%, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo img {
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .logo img:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--foreground);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        /* Hero Logo */
        .hero-logo {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .hero-logo img {
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .hero-logo img:hover {
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
          padding: 8rem 1rem 5rem;
        }

        .hero-content {
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--muted-foreground);
          max-width: 42rem;
          margin: 0 auto 2rem;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 3.75rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-buttons {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        /* Demo Section */
        .demo {
          padding: 5rem 1rem;
        }

        .demo-container {
          max-width: 56rem;
          margin: 0 auto;
        }

        .demo-placeholder {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius);
          overflow: hidden;
          border: 2px solid hsla(145, 63%, 49%, 0.2);
          background: var(--card);
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .demo-placeholder:hover {
          border-color: hsla(145, 63%, 49%, 0.4);
        }

        .demo-placeholder:hover .play-button {
          background: hsla(145, 63%, 49%, 0.3);
        }

        .demo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, hsla(145, 63%, 49%, 0.05), transparent);
        }

        .demo-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .play-button {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: background 0.3s ease;
        }

        .play-button svg {
          color: var(--primary);
          margin-left: 4px;
        }

        .demo-text {
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        .demo-subtext {
          color: hsla(200, 10%, 60%, 0.6);
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .demo-mockup {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
        }

        .mockup-inner {
          background: hsla(200, 15%, 18%, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mockup-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.3);
        }

        .mockup-text {
          flex: 1;
        }

        .mockup-line-1 {
          height: 0.75rem;
          background: hsla(200, 10%, 60%, 0.2);
          border-radius: 0.25rem;
          width: 6rem;
          margin-bottom: 0.25rem;
        }

        .mockup-line-2 {
          height: 0.5rem;
          background: hsla(200, 10%, 60%, 0.1);
          border-radius: 0.25rem;
          width: 8rem;
        }

        /* Trust Statement */
        .trust-statement {
          margin-top: 3rem;
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--muted-foreground);
          font-size: 1.125rem;
          max-width: 42rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }

        /* Features Section */
        .features {
          padding: 5rem 1rem;
        }

        .features-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 64rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .feature-card {
          padding: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .feature-card:hover {
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .feature-card:hover .feature-icon {
          background: hsla(145, 63%, 49%, 0.2);
        }

        .feature-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          background: hsla(145, 63%, 49%, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: background 0.3s ease;
        }

        .feature-icon svg {
          color: var(--primary);
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: var(--muted-foreground);
        }

        /* Social Proof Section */
        .social-proof {
          padding: 5rem 1rem;
        }

        .testimonial {
          max-width: 48rem;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
        }

        .quote-icon {
          color: var(--primary);
          opacity: 0.3;
          margin-bottom: 1.5rem;
        }

        .testimonial-quote {
          font-size: 1.5rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .testimonial-author {
          color: var(--muted-foreground);
        }

        @media (min-width: 768px) {
          .testimonial-quote {
            font-size: 1.75rem;
          }
        }

        /* Pricing Section */
        .pricing {
          padding: 5rem 1rem;
        }

        .pricing-card {
          max-width: 28rem;
          margin: 0 auto;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .pricing-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--primary);
          color: var(--primary-foreground);
          padding: 0.25rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          border-bottom-left-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .pricing-header {
          text-align: center;
          padding-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .pricing-subtitle {
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .pricing-amount {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
        }

        .currency {
          color: var(--muted-foreground);
        }

        .pricing-benefits {
          margin-bottom: 1.5rem;
        }

        .pricing-benefits ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pricing-benefits li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .check-icon {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .check-icon svg {
          color: var(--primary);
        }

        .pricing-guarantee {
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.875rem;
          margin-top: 1.5rem;
        }

        /* FAQ Section */
        .faq {
          padding: 5rem 1rem;
        }

        .faq-list {
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .faq-item.open {
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .faq-trigger {
          width: 100%;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          color: var(--foreground);
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .faq-trigger:hover {
          color: var(--primary);
        }

        .faq-chevron {
          color: var(--muted-foreground);
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.open .faq-content {
          max-height: 500px;
        }

        .faq-content p {
          padding: 0 1.5rem 1.5rem;
          color: var(--muted-foreground);
        }

        /* Footer */
        .footer {
          padding: 2rem 1rem;
          border-top: 1px solid hsla(200, 15%, 20%, 0.5);
          text-align: center;
        }

        .footer p {
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal.open {
          display: flex;
        }

        .modal-overlay {
          position: absolute;
          inset: 0;
          background: hsla(0, 0%, 0%, 0.8);
          backdrop-filter: blur(4px);
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 28rem;
          padding: 2rem;
          animation: fadeInUp 0.3s ease;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--foreground);
        }

        .modal-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 1rem;
        }

        .input-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted-foreground);
        }

        .input-wrapper input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.75rem;
          background: var(--input);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--foreground);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-wrapper input::placeholder {
          color: var(--muted-foreground);
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px hsla(145, 63%, 49%, 0.1);
        }

        .modal-privacy {
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.75rem;
          margin-top: 1rem;
        }

        /* Toast */
        .toast {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1rem 1.5rem;
          z-index: 200;
          transform: translateY(150%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .toast.show {
          transform: translateY(0);
          opacity: 1;
        }

        .toast-title {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .toast-message {
          display: block;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Responsive Navigation */
        @media (max-width: 767px) {
          .navbar .btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }

        /* Mobile Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1rem;
            text-align: center;
            max-width: 90%;
            margin: 0 auto;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-buttons button {
            width: 100%;
            min-width: unset;
            margin-right: 0;
            padding: 16px 24px;
            font-size: 16px;
          }

          .p2p-hook {
            font-size: 14px;
            padding: 10px 20px;
            margin-bottom: 20px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .step-card {
            padding: 30px 20px;
          }

          .viral-headline {
            font-size: 32px;
            line-height: 1.2;
          }

          .viral-subheadline {
            font-size: 20px;
          }

          .viral-hook button {
            width: 100%;
            min-width: unset;
            padding: 18px 32px;
            font-size: 18px;
          }

          .demo-video-wrapper {
            margin: 0 -20px;
          }

          .social-proof-section {
            padding: 60px 20px;
          }

          .reddit-posts-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 1.5rem 1rem;
          }

          .viral-headline {
            font-size: 28px;
          }

          .viral-subheadline {
            font-size: 18px;
          }

          .section-title {
            font-size: 28px;
          }

          .step-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .step-card h3 {
            font-size: 20px;
          }

          .step-card p {
            font-size: 14px;
          }
        }

        /* Micro-interactions */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.2);
          border-color: rgba(37, 211, 102, 0.3);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        .btn:active {
          transform: translateY(0);
        }

        .viral-hook button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);
        }

        /* Performance optimizations */
        .hero-content,
        .step-card,
        .viral-message {
          will-change: transform;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
