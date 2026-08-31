import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// ─── i18n ────────────────────────────────────────────────────────────────────
const LANGS: Record<string, Record<string, string>> = {
  en: {
    feat_future: `All future features included`,
    feat_everything_free: `Everything in Free`,
    pro_once: `one-time · no subscription`,
    hero_h1_1: 'So why does your photo',
    hero_h1_2: 'say the same thing to everyone,',
    hero_h1_new: "One WhatsApp. Different photos for different people.",
    hero_now: `when you don't?`,
    hero_sub: `Show your professional photo to work contacts and your personal photo to everyone else. Automatically.`,
    // 2026-08-30 (Webb, product/marketing rewrite): the old hero led with
    // a philosophical hook before saying what the product does. These two
    // lines replace it, leading with the acquisition feature (works alone,
    // no counterparty install) before the differentiation feature (needs
    // both sides), per Webb's "Scheduled Photos = activation, P2P =
    // differentiation" funnel.
    hero_scheduled_note: `Scheduled Photos works on your own account — no one else installs anything.`,
    hero_p2p_note: `Want different people to see different photos? Use Private Contact Sharing.`,
    hero_cta: 'Install free',
    hero_cta_sub: `Free forever · Unlimited contacts · Upgrade anytime`,
    hero_social_proof: `Built for people who use one WhatsApp account for work and life.`,
    what_happens_where_title: `What happens where`,
    what_contacts_see_label: `What your contacts see`,
    what_contacts_see_val: `Your chosen photo. Nothing else changes for them.`,
    what_phone_label: `What happens on your phone`,
    what_phone_val: `Your WhatsApp profile photo updates automatically — on schedule, or the moment you assign it.`,
    what_web_label: `What happens on WhatsApp Web`,
    what_web_val: `The same photo syncs automatically. No separate setup needed.`,
    what_requires_install_label: `What requires another installation`,
    what_requires_install_val: `Only Private Contact Sharing (Pro). Scheduled Photos never needs anyone else to install anything.`,
    // Visual demo strip -- 2026-08-30 (Webb): "Imagine: 8:59 AM Personal
    // photo, 9:00 AM Switch now, WhatsApp desktop -> Professional photo,
    // WhatsApp phone -> Professional photo. Then: One switch. Every
    // device." Put directly after the hero rather than buried in the
    // pricing/feature copy -- this is the strongest, most tangible proof
    // of the product's core behaviour.
    visual_demo_title: `One switch. Every device.`,
    visual_demo_sub: `When Scheduled Photos switches, your real WhatsApp photo updates everywhere at once — no one else does anything.`,
    visual_demo_time1: `8:59 AM`,
    visual_demo_label1: `Personal photo`,
    visual_demo_switch: `Switch now`,
    visual_demo_time2: `9:00 AM`,
    visual_demo_device1: `WhatsApp Desktop`,
    visual_demo_device2: `WhatsApp Phone`,
    visual_demo_label2: `Professional photo`,
    // "Is this for me?" section -- 2026-08-30 (Webb): eliminate the
    // confusion between the two features up front, before pricing, so a
    // visitor self-selects rather than discovering the P2P requirement
    // only after wanting to buy.
    is_for_me_title: `Is this for me?`,
    is_for_me_q1: `Want your WhatsApp photo to change automatically during the day?`,
    is_for_me_q1_point1: `Works immediately`,
    is_for_me_q1_point2: `No contact needs DualProfile`,
    is_for_me_q1_point3: `Changes your actual WhatsApp photo`,
    is_for_me_q1_point4: `Appears across your phone and computer`,
    is_for_me_q2: `Want different people to see different photos?`,
    is_for_me_q2_point1: `Yes`,
    is_for_me_q2_point2: `Both people need DualProfile`,
    is_for_me_q2_point3: `Works on WhatsApp Web`,
    // Security section -- 2026-08-30 (Webb): "This is already one of your
    // strongest messages... deserves much more prominence." Previously
    // only demo_privacy, one small line under the video embed.
    security_title: `We don't read your chats.`,
    security_point1: `No chat data is ever stored or accessed.`,
    security_point2: `Photos are synced securely — only the contacts you choose can ever see them.`,
    security_point3: `Works entirely through WhatsApp Web. Nothing routes through a third-party server that reads your messages.`,
    share_hook_1: `Your boss and your best friend have been seeing the same WhatsApp photo of you.`,
    share_hook_2: `Until now.`,
    share_hook_3: `WhatsApp never made this possible. So we did.`,
    hero_demo: 'Watch Demo',
    live_badge: `Free forever · Unlimited contacts · Upgrade anytime`,
    nav_features: 'Features',
    nav_demo: 'Demo',
    nav_pricing: 'Pricing',
    nav_faq: 'FAQ',
    nav_cta: 'Install free',
    features_title: 'One WhatsApp. Multiple identities.',
    features_sub: 'You decide who sees what.',
    feat1_title: `Scheduled Photos`,
    feat1_desc: `Your real WhatsApp photo switches by day and time — work photo 9-6, personal the rest of the time. One tap confirms each change, visible on every device, no one else needs to install anything.`,
    feat2_title: `Photo History & Revert`,
    feat2_desc: `Restore any of your last 3 uploaded photos per slot. Changed your mind? One tap to go back.`,
    feat3_title: 'Export & Import',
    feat3_desc: 'Back up all your contact assignments as a JSON file. Restore instantly on any device.',
    feat4_title: 'Multi-Device Sync',
    feat4_desc: 'Your preferences sync across all your devices automatically.',
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Annual',
    feat_lifetime_badge: 'Lifetime',
    identity_title: "You wouldn't talk to your boss like you talk to your best friend.",
    identity_sub: "So don't show them the same photo either. Assign any photo to any contact — DualProfile switches it automatically.",
    identity_boss: 'Your boss',
    identity_boss_sees: 'Sees your professional headshot',
    identity_friends: 'Your friends',
    identity_friends_sees: 'See the real you',
    identity_family: 'Your family',
    identity_family_sees: 'See whatever version you choose',
    pricing_title: 'Simple, honest pricing.',
    pricing_sub: `Free forever for everything you actually need. One optional upgrade.`,
    free_label: 'Free',
    free_sub: `Unlimited contacts + Scheduled Photos`,
    free_trial_note: 'No credit card required',
    free_forever: 'forever',
    pro_label: 'Pro',
    // 2026-08-30 (Webb): "Everything free, plus history and backup" was
    // too abstract to justify a payment decision -- name the actual
    // unlocks instead.
    pro_sub: `Photo history, bulk assignment, export/import & multi-device sync`,
    pro_mo: '/month',
    annual_label: 'Annual',
    annual_sub: 'Bulk assign + Scheduled Photos',
    annual_yr: '/year',
    lifetime_label: 'Lifetime',
    lifetime_sub: 'Export, Sync, Priority + future features',
    lifetime_once: 'one-time',
    badge_popular: 'POPULAR',
    badge_value: 'BEST VALUE',
    usd_approx: 'approx.',
    feat_contacts_free: `Unlimited contacts`,
    feat_contacts_pro: 'Unlimited contacts',
    feat_trial: 'Bulk contact assignment',
    feat_preview: 'Live preview mode',
    // 2026-08-30 (Webb): renamed from "P2P photo sync" -- that name reads
    // like it works automatically once installed, when it actually
    // requires the OTHER contact to also have DualProfile. See
    // status_2_title/status_2_desc for the fuller requirement callout.
    feat_p2p: 'Private contact-to-contact sharing',
    feat_chrome: 'Chrome & Edge',
    feat_photo_history: 'Photo History & Revert',
    feat_scheduled: 'Scheduled Photos',
    feat_export: 'Export & Import',
    feat_sync: 'Multi-Device Sync',
    feat_priority: 'Priority support',
    feat_nofee: 'No recurring fees',
    btn_start_trial: 'Install free',
    btn_get_pro: 'Get Pro',
    btn_get_annual: 'Get Annual',
    btn_get_lifetime: 'Get Lifetime',
    trial_title: 'Try DualProfile free, upgrade when ready.',
    trial_desc: `Free gives you Scheduled Photos — your real photo switches by day and time, one tap to confirm, visible on every device, no one else needs to install anything — plus unlimited per-contact assignments. Pro is a single £29 payment that adds Photo History & Revert, bulk assignment, Export/Import, Multi-Device Sync and priority support.`,
    trial_cta: 'Install free',
    social_title: 'Real people. Real use cases.',
    social_quote: 'having your boss see something professional while mates get the real you is pretty handy',
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    // 2026-08-30 (Webb): "Installed in 8+ countries" is almost meaningless
    // to a buyer -- replaced with an honest claim rather than a vanity
    // metric. Real testimonials should replace this once there are some.
    social_stat1: 'Built solo, for real work/life separation',
    social_stat2: 'No paid marketing',
    social_stat3: 'Featured on r/DigitalPrivacy',
    viral_title: 'One WhatsApp. Multiple identities. You decide who sees what.',
    viral_sub: `Free to install. Unlimited contacts, free forever.`,
    viral_cta: 'Install free',
    viral_note: `Unlimited contacts free forever · Pro is £29 once, never a subscription`,
    faq_title: 'Frequently Asked Questions',
    faq_sub: `Got questions? We've got answers.`,
    faq_1_q: 'Does my contact need to install anything?',
    faq_1_a: `Yes — DualProfile works peer-to-peer. When you assign a photo to a contact and they have DualProfile installed, your photo appears on their screen automatically. Share the install link — setup takes about 3 minutes.`,
    faq_2_q: 'Does this work on the WhatsApp mobile app?',
    faq_2_a: `Scheduled Photos changes your real WhatsApp photo, so once it switches, everyone sees it everywhere, mobile included. Per-contact assignment is different — it only shows on WhatsApp Web, and only to contacts who also have DualProfile installed.`,
    faq_3_q: `What is free, and what does Pro add?`,
    faq_3_a: `Free gives you unlimited contacts and Scheduled Photos, forever, with no card required. Pro is a one-time £29 payment — not a subscription — and adds Photo History & Revert, bulk contact assignment, Export/Import, Multi-Device Sync and priority support.`,
    faq_4_q: 'Is my data secure?',
    faq_4_a: 'Your photos are securely synced so they appear only to the contacts you choose. We never read your messages or access your chats.',
    faq_5_q: `Does Scheduled Photos need anyone else to install DualProfile?`,
    faq_5_a: `No. It changes your own account's real photo, so nobody else needs anything installed — that's what makes it work from the very first day.`,
    // Two entries added 2026-08-30 (Webb): the FAQ should only answer
    // purchase-blocking questions. These two were missing outright --
    // faq_6 directly addresses the exact expectation gap most likely
    // behind an early refund (buying Pro expecting Private Contact
    // Sharing to work without the other person installing anything).
    faq_6_q: `What happens if the person I share with doesn't install DualProfile?`,
    faq_6_a: `They keep seeing your normal WhatsApp photo. Private Contact Sharing only ever changes what a specific contact sees once THEY also have DualProfile installed — it never affects anyone else, and nothing breaks or looks wrong on their end either way.`,
    faq_7_q: `Is Pro a subscription?`,
    faq_7_a: `No. Pro is a single one-time payment — £29, charged once. There's no recurring billing, no trial that auto-converts, and no expiry.`,
    footer_rights: 'All rights reserved.',
    footer_note: `Your photos are synced securely — only the contacts you choose can see them.`,
    copied_msg: 'Copied!',
    callout_btn: 'Copy install link',
    preview_callout: `Don't want to wait for your contacts to install? Use Preview Mode to see exactly how you'd appear to anyone — right away.`,
    demo_privacy: `This works entirely on WhatsApp Web. No chat data is stored.`,
    demo_caption: 'Watch how Preview Mode shows exactly what each contact sees.',
    how_title: 'Set up once with someone. Works automatically.',
    how_sub: `For per-contact photos. Scheduled Photos needs no setup with anyone else — just set your times and confirm each switch with one tap.`,
    step1_title: 'Install DualProfile and upload your photos.',
    step1_sub: 'One for work. One for life.',
    step2_title: 'Assign which photo each contact sees.',
    step2_sub: 'Takes about 2 minutes.',
    step3_title: `They install too — your photo switches automatically.`,
    step3_sub: 'No extra steps once they are set up.',
    callout_text: `DualProfile works when both people have it installed. Send someone the link — setup takes 3 minutes.`,
    until_now: 'Until now.',
    reddit_title: 'The answer was always no.',
    reddit_sub: 'Before DualProfile, the only solution was a second phone number. Not anymore.',
    reddit_1_q: `"Is there a way to show different profile pictures to different people?"`,
    reddit_1_a: 'Top answer: Nope.',
    reddit_2_q: `"Different profile picture between web and app — is it possible?"`,
    reddit_2_a: 'Top answer: Only if you have two phone numbers.',
    reddit_3_q: `"WhatsApp should support multiple profile photos."`,
    reddit_3_a: 'Top answer: [deleted]',
    status_title: 'Current Status',
    status_1_title: 'Preview Mode',
    status_1_desc: 'See how others would see your profile',
    status_2_title: 'Private Contact Sharing',
    status_2_desc: 'Real-time profile switching now live — requires the other contact to have DualProfile installed too',
    status_3_title: 'Group Chats',
    status_3_desc: 'Not supported yet',
    modal_title: 'Install DualProfile',
    modal_sub: `Free to install. Scheduled Photos and unlimited contacts, free forever. No credit card required. Works on WhatsApp Web in Chrome and Edge.`,
    modal_btn: 'Install free',
    modal_note: `Unlimited contacts, free forever · No credit card required`,
  },
  es: {
    feat_future: `Todas las funciones futuras incluidas`,
    feat_everything_free: `Todo lo de Gratis`,
    pro_once: `pago unico · sin suscripcion`,
    hero_h1_1: 'Entonces, por que tu foto',
    hero_h1_2: 'dice lo mismo a todos,',
    hero_h1_new: `Un WhatsApp. Fotos distintas para personas distintas.`,
    hero_now: 'cuando tu no?',
    hero_sub: `Muestra tu foto profesional a tus contactos de trabajo y tu foto personal a todos los demas. Automaticamente.`,
    hero_cta: 'Iniciar prueba gratis',
    hero_cta_sub: `Gratis para siempre · Contactos ilimitados · Actualiza cuando quieras`,
    hero_social_proof: `Hecho para personas que usan una sola cuenta de WhatsApp para el trabajo y la vida personal.`,
    hero_scheduled_note: `Fotos Programadas funciona en tu propia cuenta — nadie mas necesita instalar nada.`,
    hero_p2p_note: `¿Quieres que personas distintas vean fotos distintas? Usa Compartir Fotos Privado.`,
    visual_demo_title: `Un cambio. Todos los dispositivos.`,
    visual_demo_sub: `Cambia tu foto una vez y se actualiza en todos los dispositivos donde tengas DualProfile conectado.`,
    visual_demo_time1: `8:59 AM`,
    visual_demo_label1: `Foto personal`,
    visual_demo_time2: `9:00 AM`,
    visual_demo_switch: `Cambiar ahora`,
    visual_demo_label2: `Foto profesional`,
    visual_demo_device1: `WhatsApp Escritorio`,
    visual_demo_device2: `WhatsApp Movil`,
    is_for_me_title: `¿Es esto para mi?`,
    is_for_me_q1: `Fotos Programadas`,
    is_for_me_q1_point1: `Funciona de inmediato`,
    is_for_me_q1_point2: `Ningun contacto necesita DualProfile`,
    is_for_me_q1_point3: `Cambia tu foto real de WhatsApp`,
    is_for_me_q1_point4: `Aparece en tu telefono y tu ordenador`,
    is_for_me_q2: `Fotos Privadas por Contacto`,
    is_for_me_q2_point1: `Si, funciona igual`,
    is_for_me_q2_point2: `Ambas personas necesitan DualProfile`,
    is_for_me_q2_point3: `Funciona en WhatsApp Web`,
    faq_6_q: `¿Que pasa si la persona con la que comparto no instala DualProfile?`,
    faq_6_a: `Compartir Fotos Privado necesita que ambas partes tengan DualProfile instalado. Si no lo ha instalado, no vera tu foto asignada — Fotos Programadas sigue funcionando sin problema en tu propia cuenta.`,
    faq_7_q: `¿Pro es una suscripcion?`,
    faq_7_a: `No. Pro es un pago unico de £29. Lo conservas para siempre, incluidas las futuras funciones Pro, sin cobros recurrentes.`,
    security_title: `Tu privacidad, por diseno`,
    security_point1: `No leemos tus chats. No se almacenan datos de conversaciones.`,
    security_point2: `Nunca vemos el contenido de tus mensajes — solo la foto que eliges mostrar.`,
    security_point3: `Los nombres de tus contactos nunca se guardan en nuestros servidores.`,
    what_happens_where_title: `Que pasa y donde`,
    what_contacts_see_label: `Lo que ven tus contactos`,
    what_contacts_see_val: `La foto que elegiste. Nada mas cambia para ellos.`,
    what_phone_label: `Lo que pasa en tu telefono`,
    what_phone_val: `Tu foto de perfil de WhatsApp se actualiza automaticamente, segun el horario o en el momento en que la asignes.`,
    what_web_label: `Lo que pasa en WhatsApp Web`,
    what_web_val: `La misma foto se sincroniza automaticamente. No necesitas configurar nada aparte.`,
    what_requires_install_label: `Que requiere otra instalacion`,
    what_requires_install_val: `Solo Compartir Fotos Privado (Pro). Fotos Programadas nunca necesita que nadie mas instale nada.`,
    share_hook_1: `Tu jefe y tu mejor amigo han estado viendo la misma foto tuya en WhatsApp.`,
    share_hook_2: `Hasta ahora.`,
    share_hook_3: `WhatsApp nunca hizo esto posible. Asi que lo hicimos nosotros.`,
    hero_demo: 'Ver demo',
    live_badge: `Gratis para siempre · Contactos ilimitados · Actualiza cuando quieras`,
    nav_features: 'Funciones',
    nav_demo: 'Demo',
    nav_pricing: 'Precios',
    nav_faq: 'FAQ',
    nav_cta: 'Iniciar prueba gratis',
    features_title: 'Un WhatsApp. Multiples identidades.',
    features_sub: 'Tu decides quien ve que.',
    feat1_title: `Fotos programadas`,
    feat1_desc: `Tu foto real de WhatsApp cambia segun el dia y la hora: foto de trabajo de 9 a 18h, personal el resto del tiempo. Un toque confirma cada cambio, visible en todos tus dispositivos, nadie mas necesita instalar nada.`,
    feat2_title: `Historial de fotos y reversion`,
    feat2_desc: `Restaura cualquiera de tus ultimas 3 fotos subidas por ranura. ¿Cambiaste de opinion? Un toque para volver atras.`,
    feat3_title: 'Exportar e Importar',
    feat3_desc: 'Guarda todas tus asignaciones de contactos como archivo JSON. Restaura al instante.',
    feat4_title: 'Sincronizacion Multi-Dispositivo',
    feat4_desc: 'Tus preferencias se sincronizan en todos tus dispositivos automaticamente.',
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Anual',
    feat_lifetime_badge: 'Lifetime',
    identity_title: 'No hablarias con tu jefe igual que con tu mejor amigo.',
    identity_sub: 'Entonces no les muestres la misma foto tampoco. Asigna cualquier foto a cualquier contacto — DualProfile la cambia automaticamente.',
    identity_boss: 'Tu jefe',
    identity_boss_sees: 'Ve tu foto profesional',
    identity_friends: 'Tus amigos',
    identity_friends_sees: 'Ven el tu de verdad',
    identity_family: 'Tu familia',
    identity_family_sees: 'Ven la version que elijas',
    pricing_title: 'Precios simples y honestos.',
    pricing_sub: `Gratis para siempre en todo lo esencial. Una mejora opcional.`,
    free_label: 'Gratis',
    free_sub: `Contactos ilimitados + Fotos programadas`,
    free_trial_note: 'Sin tarjeta de credito',
    free_forever: 'para siempre',
    pro_label: 'Pro',
    pro_sub: `Historial de fotos, asignacion masiva, exportar/importar y sincronizacion multi-dispositivo`,
    pro_mo: '/mes',
    annual_label: 'Anual',
    annual_sub: 'Ilimitados + asignacion masiva',
    annual_yr: '/ano',
    lifetime_label: 'De por vida',
    lifetime_sub: 'Asignacion masiva + funciones futuras',
    lifetime_once: 'pago unico',
    badge_popular: 'POPULAR',
    badge_value: 'MEJOR VALOR',
    usd_approx: 'aprox.',
    feat_contacts_free: `Contactos ilimitados`,
    feat_contacts_pro: 'Contactos ilimitados',
    feat_trial: 'Asignacion masiva de contactos',
    feat_preview: 'Vista previa en vivo',
    feat_p2p: `Compartir fotos de contacto a contacto`,
    feat_chrome: 'Chrome y Edge',
    feat_photo_history: 'Historial y Revertir Fotos',
    feat_scheduled: 'Fotos Programadas',
    feat_export: 'Exportar e Importar',
    feat_sync: 'Sincronizacion Multi-Dispositivo',
    feat_priority: 'Soporte prioritario',
    feat_nofee: 'Sin cargos recurrentes',
    btn_start_trial: 'Instalar gratis',
    btn_get_pro: 'Obtener Pro',
    btn_get_annual: 'Obtener Anual',
    btn_get_lifetime: 'Obtener De por vida',
    trial_title: 'Prueba DualProfile gratis, actualiza cuando estes listo.',
    trial_desc: `Gratis te da Fotos programadas: tu foto real cambia por dia y hora, un toque para confirmar, visible en todos tus dispositivos, nadie mas necesita instalar nada, ademas de asignaciones ilimitadas por contacto. Pro es un pago unico de £29 que anade Historial de fotos, asignacion masiva, Exportar/Importar, sincronizacion multi-dispositivo y soporte prioritario.`,
    trial_cta: 'Instalar gratis',
    social_title: 'Personas reales. Casos de uso reales.',
    social_quote: 'que tu jefe vea algo profesional mientras tus amigos ven el verdadero tu es muy util',
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `Hecho en solitario, para una separacion real entre trabajo y vida personal.`,
    social_stat2: 'Sin marketing pagado',
    social_stat3: 'Destacado en r/DigitalPrivacy',
    viral_title: 'Un WhatsApp. Multiples identidades. Tu decides quien ve que.',
    viral_sub: `Gratis de instalar. Contactos ilimitados, gratis para siempre.`,
    viral_cta: 'Iniciar prueba gratis',
    viral_note: `Contactos ilimitados gratis para siempre · Pro son £29 una vez, nunca suscripcion`,
    faq_title: 'Preguntas frecuentes',
    faq_sub: 'Tienes preguntas? Tenemos respuestas.',
    faq_1_q: 'Mi contacto necesita instalar algo?',
    faq_1_a: `Si — DualProfile funciona de igual a igual. Cuando asignas una foto y tu contacto tiene DualProfile, tu foto aparece automaticamente en su pantalla.`,
    faq_2_q: 'Funciona en la app movil de WhatsApp?',
    faq_2_a: `Las Fotos programadas cambian tu foto real de WhatsApp, asi que una vez que cambia, todos la ven en todas partes, incluido el movil. La asignacion por contacto es distinta: solo se ve en WhatsApp Web, y solo para los contactos que tambien tengan DualProfile instalado.`,
    faq_3_q: `Que es gratis y que anade Pro?`,
    faq_3_a: `Gratis te da contactos ilimitados y Fotos programadas, para siempre, sin tarjeta. Pro es un pago unico de £29 (no una suscripcion) y anade Historial de fotos, asignacion masiva, Exportar/Importar, sincronizacion multi-dispositivo y soporte prioritario.`,
    faq_4_q: 'Mis datos estan seguros?',
    faq_4_a: 'Tus fotos se sincronizan de forma segura para que solo las vean los contactos que elijas. Nunca leemos tus mensajes ni accedemos a tus chats.',
    faq_5_q: `¿Las Fotos programadas necesitan que alguien mas instale DualProfile?`,
    faq_5_a: `No. Cambia la foto real de tu propia cuenta, asi que nadie mas necesita instalar nada, por eso funciona desde el primer dia.`,
    footer_rights: 'Todos los derechos reservados.',
    footer_note: `Tus fotos se sincronizan de forma segura — solo los contactos que elijas pueden verlas.`,
    copied_msg: 'Copiado!',
    callout_btn: 'Copiar enlace de instalacion',
    preview_callout: `No quieres esperar a que tus contactos instalen? Usa el Modo de Vista Previa para ver al instante como apareces ante cualquiera.`,
    demo_privacy: `Funciona completamente en WhatsApp Web. No se almacenan datos de chat.`,
    demo_caption: 'Ve como el modo de vista previa muestra exactamente lo que ve cada contacto.',
    how_title: 'Configura una vez. Funciona automaticamente.',
    how_sub: `Para fotos por contacto. Las Fotos programadas no necesitan que nadie mas haga nada: solo configura tus horarios y confirma cada cambio con un toque.`,
    step1_title: 'Instala DualProfile y sube tus fotos.',
    step1_sub: 'Una para el trabajo. Una para la vida.',
    step2_title: 'Asigna que foto ve cada contacto.',
    step2_sub: 'Tarda unos 2 minutos.',
    step3_title: 'Ellos instalan tambien y tu foto cambia automaticamente.',
    step3_sub: 'Sin pasos extra una vez configurado.',
    callout_text: `DualProfile funciona cuando ambos lo tienen instalado. Envia el enlace — la configuracion tarda 3 minutos.`,
    until_now: 'Hasta ahora.',
    reddit_title: 'La respuesta siempre fue no.',
    reddit_sub: 'Antes de DualProfile, la unica solucion era un segundo numero. Ya no.',
    reddit_1_q: `"Hay forma de mostrar fotos de perfil diferentes a personas diferentes?"`,
    reddit_1_a: 'Respuesta principal: No.',
    reddit_2_q: `"Foto de perfil diferente entre web y app, es posible?"`,
    reddit_2_a: 'Respuesta principal: Solo con dos numeros.',
    reddit_3_q: `"WhatsApp deberia tener multiples fotos de perfil."`,
    reddit_3_a: 'Respuesta principal: [eliminado]',
    status_title: 'Estado actual',
    status_1_title: 'Modo vista previa',
    status_1_desc: 'Ve como te ven los demas',
    status_2_title: `Compartir Fotos Privado`,
    status_2_desc: `Cambio de perfil en tiempo real — requiere que el otro contacto tambien tenga DualProfile instalado`,
    status_3_title: 'Chats grupales',
    status_3_desc: 'Aun no compatible',
    modal_title: 'Instalar DualProfile',
    modal_sub: 'Inicia tu prueba gratis de 3 dias. Sin tarjeta. Funciona en WhatsApp Web.',
    modal_btn: 'Iniciar prueba gratis',
    modal_note: `Contactos ilimitados, gratis para siempre · Sin tarjeta de credito`,
  },
  fr: {
    feat_future: `Toutes les futures fonctionnalites incluses`,
    feat_everything_free: `Tout ce qui est dans Gratuit`,
    pro_once: `paiement unique · sans abonnement`,
    hero_h1_1: 'Alors pourquoi votre photo',
    hero_h1_2: "dit-elle la meme chose a tout le monde,",
    hero_h1_new: `Un seul WhatsApp. Des photos differentes pour des personnes differentes.`,
    hero_now: `quand ce n'est pas votre cas ?`,
    hero_sub: `Montrez votre photo professionnelle a vos contacts de travail et votre photo personnelle a tous les autres. Automatiquement.`,
    hero_cta: `Commencer l'essai gratuit`,
    hero_cta_sub: `Gratuit pour toujours · Contacts illimites · Mettez a niveau quand vous voulez`,
    hero_social_proof: `Concu pour les personnes qui utilisent un seul compte WhatsApp pour le travail et la vie personnelle.`,
    hero_scheduled_note: `Photos Programmees fonctionne sur votre propre compte — personne d'autre n'a besoin d'installer quoi que ce soit.`,
    hero_p2p_note: `Vous voulez que des personnes differentes voient des photos differentes ? Utilisez le Partage Prive entre Contacts.`,
    visual_demo_title: `Un seul changement. Tous les appareils.`,
    visual_demo_sub: `Changez votre photo une fois — elle se met a jour partout ou DualProfile est connecte.`,
    visual_demo_time1: `8h59`,
    visual_demo_label1: `Photo personnelle`,
    visual_demo_time2: `9h00`,
    visual_demo_switch: `Changer maintenant`,
    visual_demo_label2: `Photo professionnelle`,
    visual_demo_device1: `WhatsApp Bureau`,
    visual_demo_device2: `WhatsApp Telephone`,
    is_for_me_title: `Est-ce fait pour moi ?`,
    is_for_me_q1: `Photos Programmees`,
    is_for_me_q1_point1: `Fonctionne immediatement`,
    is_for_me_q1_point2: `Aucun contact n'a besoin de DualProfile`,
    is_for_me_q1_point3: `Change votre vraie photo WhatsApp`,
    is_for_me_q1_point4: `Apparait sur votre telephone et votre ordinateur`,
    is_for_me_q2: `Photos Privees par Contact`,
    is_for_me_q2_point1: `Oui, fonctionne de la meme maniere`,
    is_for_me_q2_point2: `Les deux personnes ont besoin de DualProfile`,
    is_for_me_q2_point3: `Fonctionne sur WhatsApp Web`,
    faq_6_q: `Que se passe-t-il si la personne avec qui je partage n'installe pas DualProfile ?`,
    faq_6_a: `Le Partage Prive entre Contacts necessite que les deux parties aient DualProfile installe. Si elle ne l'a pas installe, elle ne verra pas la photo que vous lui avez attribuee — Photos Programmees continue de fonctionner normalement sur votre propre compte.`,
    faq_7_q: `Pro est-il un abonnement ?`,
    faq_7_a: `Non. Pro est un paiement unique de £29. Vous le gardez, y compris les futures fonctionnalites Pro, sans frais recurrents.`,
    security_title: `Votre vie privee, par conception`,
    security_point1: `Nous ne lisons pas vos discussions. Aucune donnee de conversation n'est stockee.`,
    security_point2: `Nous ne voyons jamais le contenu des messages — seulement la photo que vous choisissez de montrer.`,
    security_point3: `Les noms de vos contacts ne sont jamais stockes sur nos serveurs.`,
    what_happens_where_title: `Ce qui se passe, et ou`,
    what_contacts_see_label: `Ce que voient vos contacts`,
    what_contacts_see_val: `La photo que vous avez choisie. Rien d'autre ne change pour eux.`,
    what_phone_label: `Ce qui se passe sur votre telephone`,
    what_phone_val: `Votre photo de profil WhatsApp se met a jour automatiquement, selon l'horaire ou des que vous l'attribuez.`,
    what_web_label: `Ce qui se passe sur WhatsApp Web`,
    what_web_val: `La meme photo se synchronise automatiquement. Aucune configuration separee n'est necessaire.`,
    what_requires_install_label: `Ce qui necessite une autre installation`,
    what_requires_install_val: `Seul le Partage Prive entre Contacts (Pro). Photos Programmees n'a jamais besoin que quelqu'un d'autre installe quoi que ce soit.`,
    share_hook_1: `Votre patron et votre meilleur ami voient la meme photo de vous sur WhatsApp.`,
    share_hook_2: `Jusqu'a maintenant.`,
    share_hook_3: `WhatsApp n'a jamais rendu cela possible. Alors on l'a fait.`,
    hero_demo: 'Voir la demo',
    live_badge: `Gratuit pour toujours · Contacts illimites · Passez a Pro quand vous voulez`,
    nav_features: 'Fonctionnalites',
    nav_demo: 'Demo',
    nav_pricing: 'Tarifs',
    nav_faq: 'FAQ',
    nav_cta: `Commencer l'essai gratuit`,
    features_title: 'Un WhatsApp. Plusieurs identites.',
    features_sub: 'Vous decidez qui voit quoi.',
    feat1_title: `Photos programmees`,
    feat1_desc: `Votre vraie photo WhatsApp change selon le jour et l'heure : photo de travail de 9h a 18h, personnelle le reste du temps. Une touche confirme chaque changement, visible sur tous vos appareils, personne d'autre n'a besoin d'installer quoi que ce soit.`,
    feat2_title: `Historique des photos et retour`,
    feat2_desc: `Restaurez l'une de vos 3 dernieres photos importees par emplacement. Change d'avis ? Une touche pour revenir en arriere.`,
    feat3_title: 'Exporter et Importer',
    feat3_desc: 'Sauvegardez toutes vos attributions de contacts en JSON. Restaurez instantanement.',
    feat4_title: 'Synchronisation Multi-Appareils',
    feat4_desc: 'Vos preferences se synchronisent sur tous vos appareils automatiquement.',
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Annuel',
    feat_lifetime_badge: 'Lifetime',
    identity_title: 'Vous ne parleriez pas a votre patron comme a votre meilleur ami.',
    identity_sub: `Alors ne leur montrez pas la meme photo non plus. Attribuez n'importe quelle photo a n'importe quel contact — DualProfile la change automatiquement.`,
    identity_boss: 'Votre patron',
    identity_boss_sees: 'Voit votre photo professionnelle',
    identity_friends: 'Vos amis',
    identity_friends_sees: 'Voient le vrai vous',
    identity_family: 'Votre famille',
    identity_family_sees: 'Voient la version que vous choisissez',
    pricing_title: 'Tarification simple et honnete.',
    pricing_sub: `Gratuit pour toujours pour l'essentiel. Une seule option payante.`,
    free_label: 'Gratuit',
    free_sub: `Contacts illimites + Photos programmees`,
    free_trial_note: 'Sans carte de credit',
    free_forever: 'pour toujours',
    pro_label: 'Pro',
    pro_sub: `Historique des photos, attribution groupee, export/import et synchronisation multi-appareils`,
    pro_mo: '/mois',
    annual_label: 'Annuel',
    annual_sub: 'Illimites + assignation groupee',
    annual_yr: '/an',
    lifetime_label: 'A vie',
    lifetime_sub: 'Assignation groupee + futures fonctionnalites',
    lifetime_once: 'paiement unique',
    badge_popular: 'POPULAIRE',
    badge_value: 'MEILLEURE VALEUR',
    usd_approx: 'approx.',
    feat_contacts_free: `Contacts illimites`,
    feat_contacts_pro: 'Contacts illimites',
    feat_trial: 'Assignation groupee de contacts',
    feat_preview: 'Apercu en direct',
    feat_p2p: `Partage prive de contact a contact`,
    feat_chrome: 'Chrome et Edge',
    feat_photo_history: 'Historique et Retour de Photos',
    feat_scheduled: 'Photos Programmees',
    feat_export: 'Exporter et Importer',
    feat_sync: 'Synchronisation Multi-Appareils',
    feat_priority: 'Support prioritaire',
    feat_nofee: 'Sans frais recurrents',
    btn_start_trial: 'Installer gratuitement',
    btn_get_pro: 'Obtenir Pro',
    btn_get_annual: 'Obtenir Annuel',
    btn_get_lifetime: 'Obtenir A vie',
    trial_title: 'Essayez tout gratuitement pendant 3 jours.',
    trial_desc: `Le gratuit vous donne les Photos programmees : votre vraie photo change selon le jour et l'heure, une touche pour confirmer, visible sur tous vos appareils, personne d'autre n'a besoin d'installer quoi que ce soit, plus des assignations illimitees par contact. Pro est un paiement unique de £29 qui ajoute l'Historique des photos, l'assignation groupee, l'Export/Import, la synchronisation multi-appareils et le support prioritaire.`,
    trial_cta: 'Installer gratuitement',
    social_title: `Des vrais gens. De vrais cas d'usage.`,
    social_quote: `que votre patron voit quelque chose de professionnel pendant que vos amis voient le vrai vous, c'est vraiment pratique`,
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `Cree en solo, pour une vraie separation entre vie professionnelle et personnelle.`,
    social_stat2: 'Sans marketing paye',
    social_stat3: 'Mis en avant sur r/DigitalPrivacy',
    viral_title: 'Un WhatsApp. Plusieurs identites. Vous decidez qui voit quoi.',
    viral_sub: `Installation gratuite. Contacts illimites, gratuits pour toujours.`,
    viral_cta: `Commencer l'essai gratuit`,
    viral_note: `Contacts illimites gratuits pour toujours · Pro c'est £29 une fois, jamais un abonnement`,
    faq_title: 'Questions frequentes',
    faq_sub: 'Des questions ? Nous avons des reponses.',
    faq_1_q: 'Mon contact doit-il installer quelque chose ?',
    faq_1_a: `Oui — DualProfile fonctionne en pair-a-pair. Quand vous attribuez une photo et que votre contact a DualProfile, votre photo apparait automatiquement.`,
    faq_2_q: `Cela fonctionne-t-il sur l'app mobile WhatsApp ?`,
    faq_2_a: `Les Photos programmees changent votre vraie photo WhatsApp, donc une fois le changement effectue, tout le monde la voit partout, y compris sur mobile. L'assignation par contact est differente : elle n'apparait que sur WhatsApp Web, et seulement pour les contacts qui ont aussi DualProfile installe.`,
    faq_3_q: `Qu'est-ce qui est gratuit et qu'apporte Pro ?`,
    faq_3_a: `Le gratuit vous donne des contacts illimites et les Photos programmees, pour toujours, sans carte bancaire. Pro est un paiement unique de £29 (pas un abonnement) et ajoute l'Historique des photos, l'assignation groupee, l'Export/Import, la synchronisation multi-appareils et le support prioritaire.`,
    faq_4_q: 'Mes donnees sont-elles en securite ?',
    faq_4_a: 'Vos photos sont synchronisees de maniere securisee afin de n\'apparaitre qu\'aux contacts que vous choisissez. Nous ne lisons jamais vos messages et n\'accedons jamais a vos discussions.',
    faq_5_q: `Les Photos programmees necessitent-elles que quelqu'un d'autre installe DualProfile ?`,
    faq_5_a: `Non. Elles changent la vraie photo de votre propre compte, donc personne d'autre n'a besoin d'installer quoi que ce soit, c'est ce qui les fait fonctionner des le premier jour.`,
    footer_rights: 'Tous droits reserves.',
    footer_note: `Vos photos sont synchronisees en toute securite — seuls les contacts que vous choisissez peuvent les voir.`,
    copied_msg: 'Copie !',
    callout_btn: `Copier le lien d'installation`,
    preview_callout: `Vous ne voulez pas attendre que vos contacts s'installent ? Utilisez le Mode Apercu pour voir instantanement comment vous apparaitriez a n'importe qui.`,
    demo_privacy: `Fonctionne entierement sur WhatsApp Web. Aucune donnee de chat n'est stockee.`,
    demo_caption: 'Voyez comment le mode apercu montre exactement ce que chaque contact voit.',
    how_title: 'Configurez une fois. Fonctionne automatiquement.',
    how_sub: `Pour les photos par contact. Les Photos programmees ne necessitent aucune configuration avec qui que ce soit d'autre : reglez juste vos horaires et confirmez chaque changement d'une touche.`,
    step1_title: 'Installez DualProfile et telechargez vos photos.',
    step1_sub: 'Une pour le travail. Une pour la vie.',
    step2_title: 'Attribuez quelle photo chaque contact voit.',
    step2_sub: 'Prend environ 2 minutes.',
    step3_title: 'Ils installent aussi et votre photo change automatiquement.',
    step3_sub: 'Aucune etape supplementaire une fois configure.',
    callout_text: `DualProfile fonctionne quand les deux personnes l'ont installe. Envoyez le lien — 3 minutes.`,
    until_now: `Jusqu'a maintenant.`,
    reddit_title: 'La reponse a toujours ete non.',
    reddit_sub: 'Avant DualProfile, la seule solution etait un deuxieme numero. Plus maintenant.',
    reddit_1_q: `"Y a-t-il un moyen d'afficher des photos de profil differentes a differentes personnes ?"`,
    reddit_1_a: 'Meilleure reponse : Non.',
    reddit_2_q: `"Photo de profil differente entre web et app, est-ce possible ?"`,
    reddit_2_a: 'Meilleure reponse : Seulement avec deux numeros.',
    reddit_3_q: `"WhatsApp devrait avoir plusieurs photos de profil."`,
    reddit_3_a: 'Meilleure reponse : [supprime]',
    status_title: 'Statut actuel',
    status_1_title: 'Mode apercu',
    status_1_desc: 'Voyez comment les autres vous voient',
    status_2_title: `Partage Prive entre Contacts`,
    status_2_desc: `Changement de profil en temps reel — necessite que l'autre contact ait aussi DualProfile installe`,
    status_3_title: 'Chats de groupe',
    status_3_desc: 'Pas encore pris en charge',
    modal_title: 'Installer DualProfile',
    modal_sub: 'Commencez votre essai gratuit de 3 jours. Sans carte. Fonctionne sur WhatsApp Web.',
    modal_btn: `Commencer l'essai gratuit`,
    modal_note: `Contacts illimites, gratuit pour toujours · Sans carte de credit`,
  },
  pt: {
    feat_future: `Todas as funcionalidades futuras incluidas`,
    feat_everything_free: `Tudo do plano Gratis`,
    pro_once: `pagamento unico · sem subscricao`,
    hero_h1_1: 'Entao por que sua foto',
    hero_h1_2: 'diz a mesma coisa para todos,',
    hero_h1_new: `Um so WhatsApp. Fotos diferentes para pessoas diferentes.`,
    hero_now: 'quando voce nao?',
    hero_sub: `Mostre a sua foto profissional aos contactos de trabalho e a sua foto pessoal a todos os outros. Automaticamente.`,
    hero_cta: 'Iniciar teste gratis',
    hero_cta_sub: `Gratis para sempre · Contatos ilimitados · Atualize quando quiser`,
    hero_social_proof: `Feito para pessoas que usam uma unica conta de WhatsApp para o trabalho e a vida pessoal.`,
    hero_scheduled_note: `Fotos Agendadas funciona na sua propria conta — mais ninguem precisa de instalar nada.`,
    hero_p2p_note: `Quer que pessoas diferentes vejam fotos diferentes? Use a Partilha Privada por Contacto.`,
    visual_demo_title: `Uma mudanca. Todos os dispositivos.`,
    visual_demo_sub: `Mude a sua foto uma vez — ela atualiza-se em todos os dispositivos onde o DualProfile esta ligado.`,
    visual_demo_time1: `8h59`,
    visual_demo_label1: `Foto pessoal`,
    visual_demo_time2: `9h00`,
    visual_demo_switch: `Mudar agora`,
    visual_demo_label2: `Foto profissional`,
    visual_demo_device1: `WhatsApp Computador`,
    visual_demo_device2: `WhatsApp Telemovel`,
    is_for_me_title: `Isto e para mim?`,
    is_for_me_q1: `Fotos Agendadas`,
    is_for_me_q1_point1: `Funciona imediatamente`,
    is_for_me_q1_point2: `Nenhum contacto precisa do DualProfile`,
    is_for_me_q1_point3: `Muda a sua foto real do WhatsApp`,
    is_for_me_q1_point4: `Aparece no seu telemovel e no computador`,
    is_for_me_q2: `Fotos Privadas por Contacto`,
    is_for_me_q2_point1: `Sim, funciona da mesma forma`,
    is_for_me_q2_point2: `As duas pessoas precisam do DualProfile`,
    is_for_me_q2_point3: `Funciona no WhatsApp Web`,
    faq_6_q: `O que acontece se a pessoa com quem partilho nao instalar o DualProfile?`,
    faq_6_a: `A Partilha Privada por Contacto exige que ambas as partes tenham o DualProfile instalado. Se a pessoa nao o instalou, nao vera a foto que lhe atribuiu — as Fotos Agendadas continuam a funcionar normalmente na sua propria conta.`,
    faq_7_q: `O Pro e uma subscricao?`,
    faq_7_a: `Nao. O Pro e um pagamento unico de £29. Fica com ele para sempre, incluindo futuras funcionalidades Pro, sem cobrancas recorrentes.`,
    security_title: `A sua privacidade, por design`,
    security_point1: `Nao lemos as suas conversas. Nenhum dado de conversa e armazenado.`,
    security_point2: `Nunca vemos o conteudo das mensagens — apenas a foto que escolhe mostrar.`,
    security_point3: `Os nomes dos seus contactos nunca sao guardados nos nossos servidores.`,
    what_happens_where_title: `O que acontece, e onde`,
    what_contacts_see_label: `O que os seus contactos veem`,
    what_contacts_see_val: `A foto que escolheu. Mais nada muda para eles.`,
    what_phone_label: `O que acontece no seu telemovel`,
    what_phone_val: `A sua foto de perfil do WhatsApp atualiza-se automaticamente, conforme o horario ou assim que a atribui.`,
    what_web_label: `O que acontece no WhatsApp Web`,
    what_web_val: `A mesma foto sincroniza-se automaticamente. Nao e preciso nenhuma configuracao separada.`,
    what_requires_install_label: `O que requer outra instalacao`,
    what_requires_install_val: `Apenas a Partilha Privada por Contacto (Pro). As Fotos Agendadas nunca precisam que mais ninguem instale nada.`,
    share_hook_1: `Seu chefe e seu melhor amigo veem a mesma foto sua no WhatsApp.`,
    share_hook_2: `Até agora.`,
    share_hook_3: `O WhatsApp nunca tornou isso possível. Então nós fizemos.`,
    hero_demo: 'Ver demo',
    live_badge: `Gratis para sempre · Contatos ilimitados · Atualize quando quiser`,
    nav_features: 'Recursos',
    nav_demo: 'Demo',
    nav_pricing: 'Precos',
    nav_faq: 'FAQ',
    nav_cta: 'Iniciar teste gratis',
    features_title: 'Um WhatsApp. Multiplas identidades.',
    features_sub: 'Voce decide quem ve o que.',
    feat1_title: `Fotos agendadas`,
    feat1_desc: `A sua foto real do WhatsApp muda consoante o dia e a hora: foto de trabalho das 9h as 18h, pessoal no resto do tempo. Um toque confirma cada mudanca, visivel em todos os dispositivos, mais ninguem precisa de instalar nada.`,
    feat2_title: `Historico de fotos e reversao`,
    feat2_desc: `Restaure qualquer uma das suas ultimas 3 fotos carregadas por slot. Mudou de ideias? Um toque para voltar atras.`,
    feat3_title: 'Exportar e Importar',
    feat3_desc: 'Salve todas as atribuicoes de contatos como arquivo JSON. Restaure instantaneamente.',
    feat4_title: 'Sincronizacao Multi-Dispositivo',
    feat4_desc: 'Suas preferencias sincronizam em todos os dispositivos automaticamente.',
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Anual',
    feat_lifetime_badge: 'Lifetime',
    identity_title: 'Voce nao falaria com seu chefe como fala com seu melhor amigo.',
    identity_sub: 'Entao nao mostre a mesma foto para eles tambem. Atribua qualquer foto a qualquer contato — o DualProfile troca automaticamente.',
    identity_boss: 'Seu chefe',
    identity_boss_sees: 'Ve sua foto profissional',
    identity_friends: 'Seus amigos',
    identity_friends_sees: 'Veem o voce de verdade',
    identity_family: 'Sua familia',
    identity_family_sees: 'Veem a versao que voce escolher',
    pricing_title: 'Precos simples e honestos.',
    pricing_sub: `Gratis para sempre no que importa. Uma melhoria opcional.`,
    free_label: 'Gratis',
    free_sub: `Contactos ilimitados + Fotos agendadas`,
    free_trial_note: 'Sem cartao de credito',
    free_forever: 'para sempre',
    pro_label: 'Pro',
    pro_sub: `Historico de fotos, atribuicao em massa, exportar/importar e sincronizacao entre dispositivos`,
    pro_mo: '/mes',
    annual_label: 'Anual',
    annual_sub: 'Ilimitados + atribuicao em massa',
    annual_yr: '/ano',
    lifetime_label: 'Vitalicio',
    lifetime_sub: 'Atribuicao em massa + recursos futuros',
    lifetime_once: 'pagamento unico',
    badge_popular: 'POPULAR',
    badge_value: 'MELHOR VALOR',
    usd_approx: 'aprox.',
    feat_contacts_free: `Contactos ilimitados`,
    feat_contacts_pro: 'Contatos ilimitados',
    feat_trial: 'Atribuicao em massa de contatos',
    feat_preview: 'Previa ao vivo',
    feat_p2p: `Partilha privada de contacto para contacto`,
    feat_chrome: 'Chrome e Edge',
    feat_photo_history: 'Historico e Reversao de Fotos',
    feat_scheduled: 'Fotos Programadas',
    feat_export: 'Exportar e Importar',
    feat_sync: 'Sincronizacao Multi-Dispositivo',
    feat_priority: 'Suporte prioritario',
    feat_nofee: `Sem cobranças recorrentes`,
    btn_start_trial: 'Instalar gratis',
    btn_get_pro: 'Obter Pro',
    btn_get_annual: 'Obter Anual',
    btn_get_lifetime: 'Obter Vitalicio',
    trial_title: 'Experimente tudo gratuitamente por 3 dias.',
    trial_desc: `O gratis da-lhe Fotos agendadas: a sua foto real muda por dia e hora, um toque para confirmar, visivel em todos os dispositivos, mais ninguem precisa de instalar nada, alem de atribuicoes ilimitadas por contacto. Pro e um pagamento unico de £29 que acrescenta Historico de fotos, atribuicao em massa, Exportar/Importar, sincronizacao multi-dispositivo e suporte prioritario.`,
    trial_cta: 'Instalar gratis',
    social_title: 'Pessoas reais. Casos de uso reais.',
    social_quote: 'ter seu chefe vendo algo profissional enquanto seus amigos veem o voce de verdade e muito util',
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `Criado a solo, para uma separacao real entre trabalho e vida pessoal.`,
    social_stat2: 'Sem marketing pago',
    social_stat3: 'Destaque no r/DigitalPrivacy',
    viral_title: 'Um WhatsApp. Multiplas identidades. Voce decide quem ve o que.',
    viral_sub: `Instalacao gratuita. Contactos ilimitados, gratis para sempre.`,
    viral_cta: 'Iniciar teste gratis',
    viral_note: `Contactos ilimitados gratis para sempre · Pro sao £29 uma vez, nunca subscricao`,
    faq_title: 'Perguntas frequentes',
    faq_sub: 'Tem duvidas? Temos respostas.',
    faq_1_q: 'Meu contato precisa instalar algo?',
    faq_1_a: `Sim — DualProfile funciona ponto a ponto. Quando voce atribui uma foto e seu contato tem DualProfile, sua foto aparece automaticamente.`,
    faq_2_q: 'Funciona no app movel do WhatsApp?',
    faq_2_a: `As Fotos agendadas mudam a sua foto real do WhatsApp, por isso, assim que muda, todos a veem em todo o lado, incluindo no telemovel. A atribuicao por contacto e diferente: so aparece no WhatsApp Web, e apenas para os contactos que tambem tenham o DualProfile instalado.`,
    faq_3_q: `O que e gratis e o que o Pro acrescenta?`,
    faq_3_a: `O gratis da-lhe contactos ilimitados e Fotos agendadas, para sempre, sem cartao. Pro e um pagamento unico de £29 (nao e subscricao) e acrescenta Historico de fotos, atribuicao em massa, Exportar/Importar, sincronizacao multi-dispositivo e suporte prioritario.`,
    faq_4_q: 'Meus dados estao seguros?',
    faq_4_a: 'Suas fotos sao sincronizadas com seguranca para aparecerem apenas aos contatos que voce escolher. Nunca lemos suas mensagens nem acessamos seus chats.',
    faq_5_q: `As Fotos agendadas precisam que outra pessoa instale o DualProfile?`,
    faq_5_a: `Nao. Mudam a foto real da sua propria conta, por isso mais ninguem precisa de instalar nada, e e por isso que funcionam desde o primeiro dia.`,
    footer_rights: 'Todos os direitos reservados.',
    footer_note: `Suas fotos sao sincronizadas com seguranca — apenas os contatos que voce escolher podem ve-las.`,
    copied_msg: 'Copiado!',
    callout_btn: 'Copiar link de instalacao',
    preview_callout: `Nao quer esperar seus contatos instalarem? Use o Modo de Pre-visualizacao para ver instantaneamente como voce apareceria para qualquer pessoa.`,
    demo_privacy: `Funciona inteiramente no WhatsApp Web. Nenhum dado de chat e armazenado.`,
    demo_caption: 'Veja como o modo de previa mostra exatamente o que cada contato ve.',
    how_title: 'Configure uma vez. Funciona automaticamente.',
    how_sub: `Para fotos por contacto. As Fotos agendadas nao precisam de nenhuma configuracao com mais ninguem: basta definir os seus horarios e confirmar cada mudanca com um toque.`,
    step1_title: 'Instale o DualProfile e envie suas fotos.',
    step1_sub: 'Uma para o trabalho. Uma para a vida.',
    step2_title: 'Defina qual foto cada contato ve.',
    step2_sub: 'Leva cerca de 2 minutos.',
    step3_title: 'Eles instalam tambem e sua foto muda automaticamente.',
    step3_sub: 'Sem etapas extras apos a configuracao.',
    callout_text: `O DualProfile funciona quando os dois tem instalado. Envie o link — 3 minutos.`,
    until_now: 'Ate agora.',
    reddit_title: 'A resposta sempre foi nao.',
    reddit_sub: 'Antes do DualProfile, a unica solucao era um segundo numero. Nao mais.',
    reddit_1_q: `"Ha como exibir fotos de perfil diferentes para pessoas diferentes?"`,
    reddit_1_a: 'Melhor resposta: Nao.',
    reddit_2_q: `"Foto de perfil diferente entre web e app, e possivel?"`,
    reddit_2_a: 'Melhor resposta: So com dois numeros.',
    reddit_3_q: `"O WhatsApp deveria ter multiplas fotos de perfil."`,
    reddit_3_a: 'Melhor resposta: [excluido]',
    status_title: 'Status atual',
    status_1_title: 'Modo previa',
    status_1_desc: 'Veja como os outros te veem',
    status_2_title: `Partilha Privada por Contacto`,
    status_2_desc: `Mudanca de perfil em tempo real — requer que o outro contacto tambem tenha o DualProfile instalado`,
    status_3_title: 'Chats em grupo',
    status_3_desc: 'Ainda nao suportado',
    modal_title: 'Instalar DualProfile',
    modal_sub: 'Inicie seu teste gratis de 3 dias. Sem cartao. Funciona no WhatsApp Web.',
    modal_btn: 'Iniciar teste gratis',
    modal_note: `Contatos ilimitados, gratis para sempre · Sem cartao de credito`,
  },
  de: {
    feat_future: `Alle zukunftigen Funktionen inklusive`,
    feat_everything_free: `Alles aus Kostenlos`,
    pro_once: `einmalig · kein Abo`,
    hero_h1_1: 'Warum sagt dein Foto',
    hero_h1_2: 'dann jedem dasselbe,',
    hero_h1_new: `Ein WhatsApp. Verschiedene Fotos fur verschiedene Menschen.`,
    hero_now: 'wenn du es nicht tust?',
    hero_sub: `Zeige dein professionelles Foto deinen Arbeitskontakten und dein privates Foto allen anderen. Automatisch.`,
    hero_cta: 'Kostenlose Testversion starten',
    hero_cta_sub: `Fur immer kostenlos · Unbegrenzte Kontakte · Jederzeit upgraden`,
    hero_social_proof: `Gemacht fur Menschen, die ein WhatsApp-Konto fur Arbeit und Privates nutzen.`,
    hero_scheduled_note: `Geplante Fotos funktioniert auf deinem eigenen Konto — niemand sonst muss etwas installieren.`,
    hero_p2p_note: `Sollen verschiedene Leute auch verschiedene Fotos sehen? Nutze die Private Kontaktfreigabe.`,
    visual_demo_title: `Ein Wechsel. Jedes Gerat.`,
    visual_demo_sub: `Andere dein Foto einmal — es aktualisiert sich uberall, wo DualProfile verbunden ist.`,
    visual_demo_time1: `8:59 Uhr`,
    visual_demo_label1: `Privates Foto`,
    visual_demo_time2: `9:00 Uhr`,
    visual_demo_switch: `Jetzt wechseln`,
    visual_demo_label2: `Berufliches Foto`,
    visual_demo_device1: `WhatsApp Desktop`,
    visual_demo_device2: `WhatsApp Handy`,
    is_for_me_title: `Ist das fur mich?`,
    is_for_me_q1: `Geplante Fotos`,
    is_for_me_q1_point1: `Funktioniert sofort`,
    is_for_me_q1_point2: `Kein Kontakt braucht DualProfile`,
    is_for_me_q1_point3: `Andert dein echtes WhatsApp-Foto`,
    is_for_me_q1_point4: `Erscheint auf Handy und Computer`,
    is_for_me_q2: `Private Kontaktfotos`,
    is_for_me_q2_point1: `Ja, funktioniert genauso`,
    is_for_me_q2_point2: `Beide Personen brauchen DualProfile`,
    is_for_me_q2_point3: `Funktioniert in WhatsApp Web`,
    faq_6_q: `Was passiert, wenn die Person, mit der ich teile, DualProfile nicht installiert?`,
    faq_6_a: `Die Private Kontaktfreigabe erfordert, dass beide Seiten DualProfile installiert haben. Hat die Person es nicht installiert, sieht sie dein zugewiesenes Foto nicht — Geplante Fotos funktionieren trotzdem ganz normal auf deinem eigenen Konto.`,
    faq_7_q: `Ist Pro ein Abonnement?`,
    faq_7_a: `Nein. Pro ist eine einmalige Zahlung von £29. Du behaltst es dauerhaft, inklusive zukunftiger Pro-Funktionen, ohne wiederkehrende Kosten.`,
    security_title: `Deine Privatsphare, von Anfang an`,
    security_point1: `Wir lesen deine Chats nicht. Es werden keine Chat-Daten gespeichert.`,
    security_point2: `Wir sehen niemals Nachrichteninhalte — nur das Foto, das du zeigen mochtest.`,
    security_point3: `Kontaktnamen werden niemals auf unseren Servern gespeichert.`,
    what_happens_where_title: `Was wo passiert`,
    what_contacts_see_label: `Was deine Kontakte sehen`,
    what_contacts_see_val: `Das von dir gewahlte Foto. Sonst andert sich fur sie nichts.`,
    what_phone_label: `Was auf deinem Handy passiert`,
    what_phone_val: `Dein WhatsApp-Profilfoto aktualisiert sich automatisch — nach Zeitplan oder sobald du es zuweist.`,
    what_web_label: `Was in WhatsApp Web passiert`,
    what_web_val: `Dasselbe Foto wird automatisch synchronisiert. Keine separate Einrichtung notig.`,
    what_requires_install_label: `Was eine weitere Installation erfordert`,
    what_requires_install_val: `Nur die Private Kontaktfreigabe (Pro). Geplante Fotos brauchen nie, dass jemand anderes etwas installiert.`,
    share_hook_1: `Dein Chef und dein bester Freund sehen dasselbe WhatsApp-Foto von dir.`,
    share_hook_2: `Bis jetzt.`,
    share_hook_3: `WhatsApp hat das nie ermoglicht. Also haben wir es getan.`,
    hero_demo: 'Demo ansehen',
    live_badge: `Fur immer kostenlos · Unbegrenzte Kontakte · Jederzeit upgraden`,
    nav_features: 'Funktionen',
    nav_demo: 'Demo',
    nav_pricing: 'Preise',
    nav_faq: 'FAQ',
    nav_cta: 'Kostenlose Testversion starten',
    features_title: 'Ein WhatsApp. Mehrere Identitaten.',
    features_sub: 'Du entscheidest, wer was sieht.',
    feat1_title: `Geplante Fotos`,
    feat1_desc: `Dein echtes WhatsApp-Foto wechselt nach Tag und Uhrzeit: Arbeitsfoto von 9 bis 18 Uhr, privat den Rest der Zeit. Ein Tipp bestatigt jede Anderung, sichtbar auf allen Geraten, niemand sonst muss etwas installieren.`,
    feat2_title: `Fotoverlauf & Wiederherstellung`,
    feat2_desc: `Stelle jedes deiner letzten 3 hochgeladenen Fotos pro Slot wieder her. Meinung geandert? Ein Tipp, um zuruckzugehen.`,
    feat3_title: 'Exportieren & Importieren',
    feat3_desc: 'Sichere alle Kontaktzuweisungen als JSON-Datei. Sofort auf jedem Gerat wiederherstellen.',
    feat4_title: 'Mehrgerate-Synchronisation',
    feat4_desc: 'Deine Einstellungen synchronisieren sich automatisch auf allen deinen Geraten.',
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Jährlich',
    feat_lifetime_badge: 'Lifetime',
    identity_title: 'Mit deinem Chef sprichst du nicht so wie mit deinem besten Freund.',
    identity_sub: 'Warum solltest du ihnen dann dasselbe Foto zeigen? Weise jedem Kontakt ein beliebiges Foto zu — DualProfile wechselt automatisch.',
    identity_boss: 'Dein Chef',
    identity_boss_sees: 'Sieht dein professionelles Foto',
    identity_friends: 'Deine Freunde',
    identity_friends_sees: 'Sehen das echte du',
    identity_family: 'Deine Familie',
    identity_family_sees: 'Sehen die Version, die du wahlst',
    pricing_title: 'Einfache, ehrliche Preise.',
    pricing_sub: `Fur immer kostenlos fur alles Wesentliche. Ein optionales Upgrade.`,
    free_label: 'Kostenlos',
    free_sub: `Unbegrenzte Kontakte + Geplante Fotos`,
    free_trial_note: 'Keine Kreditkarte erforderlich',
    free_forever: 'fur immer',
    pro_label: 'Pro',
    pro_sub: `Foto-Verlauf, Massenzuweisung, Export/Import und Synchronisation auf mehreren Geraten`,
    pro_mo: '/Monat',
    annual_label: 'Jahrlich',
    annual_sub: 'Unbegrenzt + Massenzuweisung',
    annual_yr: '/Jahr',
    lifetime_label: 'Lebenslang',
    lifetime_sub: 'Einmal zahlen, fur immer nutzen',
    lifetime_once: 'einmalige Zahlung',
    badge_popular: 'BELIEBT',
    badge_value: 'BESTES ANGEBOT',
    usd_approx: 'ca.',
    feat_contacts_free: `Unbegrenzte Kontakte`,
    feat_contacts_pro: 'Unbegrenzte Kontakte',
    feat_trial: 'Massenzuweisung von Kontakten',
    feat_preview: 'Live-Vorschau',
    feat_p2p: `Private Foto-Freigabe von Kontakt zu Kontakt`,
    feat_chrome: 'Chrome & Edge',
    feat_photo_history: 'Fotoverlauf & Zurucksetzen',
    feat_scheduled: 'Geplante Fotos',
    feat_export: 'Exportieren & Importieren',
    feat_sync: 'Mehrgerate-Synchronisation',
    feat_priority: 'Prioritats-Support',
    feat_nofee: 'Keine wiederkehrenden Gebuhren',
    btn_start_trial: 'Kostenlos installieren',
    btn_get_pro: 'Pro holen',
    btn_get_annual: 'Jahrlich holen',
    btn_get_lifetime: 'Lebenslang holen',
    trial_title: '3 Tage lang alles kostenlos ausprobieren.',
    trial_desc: `Kostenlos gibt dir Geplante Fotos: Dein echtes Foto wechselt nach Tag und Uhrzeit, ein Tipp zur Bestatigung, sichtbar auf allen Geraten, niemand sonst muss etwas installieren, dazu unbegrenzte Kontaktzuweisungen. Pro ist eine einmalige Zahlung von £29 und erganzt Foto-Verlauf, Massenzuweisung, Export/Import, Multi-Gerate-Sync und bevorzugten Support.`,
    trial_cta: 'Kostenlos installieren',
    social_title: 'Echte Menschen. Echte Anwendungsfalle.',
    social_quote: 'dass dein Chef etwas Professionelles sieht wahrend Freunde das echte du sehen, ist echt praktisch',
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `Solo entwickelt, fur eine echte Trennung von Arbeit und Privatleben.`,
    social_stat2: 'Ohne bezahltes Marketing',
    social_stat3: 'Vorgestellt auf r/DigitalPrivacy',
    viral_title: 'Ein WhatsApp. Mehrere Identitaten. Du entscheidest, wer was sieht.',
    viral_sub: `Kostenlos installieren. Unbegrenzte Kontakte, fur immer gratis.`,
    viral_cta: 'Kostenlose Testversion starten',
    viral_note: `Unbegrenzte Kontakte fur immer gratis · Pro kostet einmalig £29, niemals ein Abo`,
    faq_title: 'Haufig gestellte Fragen',
    faq_sub: 'Fragen? Wir haben Antworten.',
    faq_1_q: 'Muss mein Kontakt auch etwas installieren?',
    faq_1_a: `Ja — DualProfile funktioniert Peer-to-Peer. Wenn du ein Foto zuweist und dein Kontakt DualProfile hat, erscheint dein Foto automatisch.`,
    faq_2_q: 'Funktioniert es in der mobilen WhatsApp-App?',
    faq_2_a: `Geplante Fotos andern dein echtes WhatsApp-Foto, sobald es wechselt, sieht es jeder uberall, auch auf dem Handy. Die Kontaktzuweisung ist anders: Sie erscheint nur in WhatsApp Web, und nur bei Kontakten, die DualProfile ebenfalls installiert haben.`,
    faq_3_q: `Was ist kostenlos und was bringt Pro?`,
    faq_3_a: `Kostenlos gibt dir unbegrenzte Kontakte und Geplante Fotos, fur immer, ohne Kreditkarte. Pro ist eine einmalige Zahlung von £29 (kein Abo) und erganzt Foto-Verlauf, Massenzuweisung, Export/Import, Multi-Gerate-Sync und bevorzugten Support.`,
    faq_4_q: 'Sind meine Daten sicher?',
    faq_4_a: 'Deine Fotos werden sicher synchronisiert, sodass sie nur fur die von dir ausgewahlten Kontakte sichtbar sind. Wir lesen niemals deine Nachrichten oder greifen auf deine Chats zu.',
    faq_5_q: `Muss fur Geplante Fotos noch jemand anderes DualProfile installieren?`,
    faq_5_a: `Nein. Es andert das echte Foto deines eigenen Kontos, niemand sonst muss etwas installieren, deshalb funktioniert es schon ab dem ersten Tag.`,
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_note: `Deine Fotos werden sicher synchronisiert — nur die von dir ausgewahlten Kontakte konnen sie sehen.`,
    copied_msg: 'Kopiert!',
    callout_btn: 'Installationslink kopieren',
    preview_callout: `Du willst nicht warten, bis deine Kontakte installieren? Nutze den Vorschaumodus, um sofort zu sehen, wie du fur jeden erscheinen wurdest.`,
    demo_privacy: `Funktioniert vollstandig in WhatsApp Web. Keine Chat-Daten werden gespeichert.`,
    demo_caption: 'Sieh, wie der Vorschaumodus genau zeigt, was jeder Kontakt sieht.',
    how_title: 'Einmal einrichten. Funktioniert automatisch.',
    how_sub: `Fur Fotos pro Kontakt. Geplante Fotos brauchen keine Einrichtung mit jemand anderem: Stelle einfach deine Zeiten ein und bestatige jeden Wechsel mit einem Tipp.`,
    step1_title: 'Installiere DualProfile und lade deine Fotos hoch.',
    step1_sub: 'Eines fur die Arbeit. Eines furs Leben.',
    step2_title: 'Weise zu, welches Foto jeder Kontakt sieht.',
    step2_sub: 'Dauert etwa 2 Minuten.',
    step3_title: 'Sie installieren auch und dein Foto wechselt automatisch.',
    step3_sub: 'Keine weiteren Schritte nach der Einrichtung.',
    callout_text: `DualProfile funktioniert, wenn beide es installiert haben. Sende den Link — 3 Minuten.`,
    until_now: 'Bis jetzt.',
    reddit_title: 'Die Antwort war immer nein.',
    reddit_sub: 'Vor DualProfile war die einzige Losung eine zweite Nummer. Nicht mehr.',
    reddit_1_q: `"Gibt es eine Moglichkeit, verschiedenen Personen verschiedene Profilbilder anzuzeigen?"`,
    reddit_1_a: 'Beste Antwort: Nein.',
    reddit_2_q: `"Verschiedenes Profilbild zwischen Web und App, ist das moglich?"`,
    reddit_2_a: 'Beste Antwort: Nur mit zwei Nummern.',
    reddit_3_q: `"WhatsApp sollte mehrere Profilfotos unterstutzten."`,
    reddit_3_a: 'Beste Antwort: [geloscht]',
    status_title: 'Aktueller Status',
    status_1_title: 'Vorschaumodus',
    status_1_desc: 'Sieh, wie andere dich sehen',
    status_2_title: `Private Kontaktfreigabe`,
    status_2_desc: `Echtzeit-Profilwechsel — erfordert, dass der andere Kontakt DualProfile ebenfalls installiert hat`,
    status_3_title: 'Gruppenunterhaltungen',
    status_3_desc: 'Noch nicht unterstutzt',
    modal_title: 'DualProfile installieren',
    modal_sub: 'Starte deine kostenlose 3-Tage-Testversion. Keine Karte. Funktioniert in WhatsApp Web.',
    modal_btn: 'Kostenlose Testversion starten',
    modal_note: `Unbegrenzte Kontakte, kostenlos fur immer · Keine Kreditkarte erforderlich`,
  },
  hi: {
    feat_future: `सभी भविष्य के फ़ीचर शामिल`,
    feat_everything_free: `मुफ़्त प्लान का सब कुछ`,
    pro_once: `एक बार भुगतान · कोई सब्सक्रिप्शन नहीं`,
    hero_h1_1: `तो फिर आपकी फोटो`,
    hero_h1_2: `सबको एक जैसी बात क्यों कहती है,`,
    hero_h1_new: `एक ही WhatsApp. अलग-अलग लोगों के लिए अलग-अलग फोटो।`,
    hero_now: `जब आप नहीं कहते?`,
    hero_sub: `अपने वर्क कॉन्टैक्ट्स को अपनी प्रोफेशनल फोटो दिखाएं और बाकी सबको अपनी पर्सनल फोटो। अपने आप।`,
    hero_cta: `मुफ्त ट्रायल शुरू करें`,
    hero_cta_sub: `हमेशा मुफ़्त · असीमित संपर्क · कभी भी अपग्रेड करें`,
    hero_social_proof: `उन लोगों के लिए बनाया गया जो काम और पर्सनल लाइफ के लिए एक ही WhatsApp अकाउंट इस्तेमाल करते हैं।`,
    hero_scheduled_note: `शेड्यूल्ड फोटोज़ आपके अपने अकाउंट पर काम करता है — किसी और को कुछ भी इंस्टॉल करने की जरूरत नहीं।`,
    hero_p2p_note: `चाहते हैं कि अलग-अलग लोग अलग-अलग फोटो देखें? प्राइवेट कॉन्टैक्ट शेयरिंग इस्तेमाल करें।`,
    visual_demo_title: `एक स्विच। हर डिवाइस।`,
    visual_demo_sub: `अपनी फोटो एक बार बदलें — यह हर उस डिवाइस पर अपडेट हो जाती है जहां DualProfile जुड़ा है।`,
    visual_demo_time1: `सुबह 8:59`,
    visual_demo_label1: `पर्सनल फोटो`,
    visual_demo_time2: `सुबह 9:00`,
    visual_demo_switch: `अभी स्विच करें`,
    visual_demo_label2: `प्रोफेशनल फोटो`,
    visual_demo_device1: `WhatsApp डेस्कटॉप`,
    visual_demo_device2: `WhatsApp फोन`,
    is_for_me_title: `क्या यह मेरे लिए है?`,
    is_for_me_q1: `शेड्यूल्ड फोटोज़`,
    is_for_me_q1_point1: `तुरंत काम करता है`,
    is_for_me_q1_point2: `किसी भी कॉन्टैक्ट को DualProfile की जरूरत नहीं`,
    is_for_me_q1_point3: `आपकी असली WhatsApp फोटो बदलता है`,
    is_for_me_q1_point4: `आपके फोन और कंप्यूटर दोनों पर दिखता है`,
    is_for_me_q2: `प्राइवेट कॉन्टैक्ट फोटोज़`,
    is_for_me_q2_point1: `हां, वैसे ही काम करता है`,
    is_for_me_q2_point2: `दोनों लोगों को DualProfile चाहिए`,
    is_for_me_q2_point3: `WhatsApp Web पर काम करता है`,
    faq_6_q: `अगर जिसके साथ मैं शेयर कर रहा हूं वो DualProfile इंस्टॉल नहीं करता तो क्या होगा?`,
    faq_6_a: `प्राइवेट कॉन्टैक्ट शेयरिंग के लिए दोनों तरफ DualProfile इंस्टॉल होना जरूरी है। अगर उन्होंने इंस्टॉल नहीं किया, तो वो आपकी असाइन की गई फोटो नहीं देख पाएंगे — शेड्यूल्ड फोटोज़ फिर भी आपके अपने अकाउंट पर सही तरीके से काम करता रहेगा।`,
    faq_7_q: `क्या Pro एक सब्सक्रिप्शन है?`,
    faq_7_a: `नहीं। Pro सिर्फ एक बार का £29 का पेमेंट है। आप इसे हमेशा के लिए रखते हैं, भविष्य के Pro फीचर्स समेत, बिना किसी बार-बार लगने वाले चार्ज के।`,
    security_title: `आपकी प्राइवेसी, शुरू से ही`,
    security_point1: `हम आपकी चैट्स नहीं पढ़ते। कोई चैट डेटा स्टोर नहीं होता।`,
    security_point2: `हम कभी भी मैसेज कंटेंट नहीं देखते — सिर्फ वो फोटो जो आप दिखाना चुनते हैं।`,
    security_point3: `कॉन्टैक्ट नेम्स कभी हमारे सर्वर पर स्टोर नहीं होते।`,
    what_happens_where_title: `क्या कहां होता है`,
    what_contacts_see_label: `आपके कॉन्टैक्ट्स को क्या दिखता है`,
    what_contacts_see_val: `आपकी चुनी हुई फोटो। उनके लिए बाकी कुछ नहीं बदलता।`,
    what_phone_label: `आपके फोन पर क्या होता है`,
    what_phone_val: `आपकी WhatsApp प्रोफाइल फोटो अपने आप अपडेट होती है — शेड्यूल के हिसाब से, या जैसे ही आप उसे असाइन करते हैं।`,
    what_web_label: `WhatsApp Web पर क्या होता है`,
    what_web_val: `वही फोटो अपने आप सिंक हो जाती है। किसी अलग सेटअप की जरूरत नहीं।`,
    what_requires_install_label: `किसके लिए दूसरी इंस्टॉलेशन जरूरी है`,
    what_requires_install_val: `सिर्फ प्राइवेट कॉन्टैक्ट शेयरिंग (Pro) के लिए। शेड्यूल्ड फोटोज़ के लिए कभी किसी और को कुछ इंस्टॉल करने की जरूरत नहीं होती।`,
    share_hook_1: `आपके बॉस और आपके सबसे अच्छे दोस्त को व्हाट्सएप पर आपकी एक ही फोटो दिख रही है।`,
    share_hook_2: `अब तक।`,
    share_hook_3: `व्हाट्सएप ने यह कभी संभव नहीं बनाया। इसलिए हमने बनाया।`,
    hero_demo: `डेमो देखें`,
    live_badge: `हमेशा मुफ़्त · असीमित संपर्क · कभी भी अपग्रेड करें`,
    nav_features: `सुविधाएँ`,
    nav_demo: `डेमो`,
    nav_pricing: `मूल्य`,
    nav_faq: 'FAQ',
    nav_cta: `मुफ्त ट्रायल शुरू करें`,
    features_title: `एक WhatsApp। कई पहचान।`,
    features_sub: `आप तय करें कौन क्या देखे।`,
    feat1_title: `शेड्यूल्ड फ़ोटो`,
    feat1_desc: `आपकी असली WhatsApp फोटो दिन और समय के हिसाब से बदलती है — 9 से 6 तक काम वाली फोटो, बाकी समय पर्सनल। हर बदलाव को कन्फर्म करने के लिए बस एक टैप, हर डिवाइस पर दिखता है, किसी और को कुछ इंस्टॉल करने की ज़रूरत नहीं।`,
    feat2_title: `फोटो हिस्ट्री और रिवर्ट`,
    feat2_desc: `हर स्लॉट के लिए अपनी आखिरी 3 अपलोड की गई फोटो में से कोई भी वापस लाएं। मन बदल गया? वापस जाने के लिए बस एक टैप।`,
    feat3_title: `एक्सपोर्ट और इम्पोर्ट`,
    feat3_desc: `सभी कॉन्टैक्ट असाइनमेंट JSON फाइल में सेव करें। किसी भी डिवाइस पर तुरंत रिस्टोर करें।`,
    feat4_title: `मल्टी-डिवाइस सिंक`,
    feat4_desc: `आपकी प्राथमिकताएं सभी डिवाइस पर अपने आप सिंक होती हैं।`,
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'वार्षिक',
    feat_lifetime_badge: 'Lifetime',
    identity_title: `आप अपने बॉस से वैसे बात नहीं करते जैसे अपने सबसे अच्छे दोस्त से करते हैं।`,
    identity_sub: `तो उन्हें वही फोटो भी मत दिखाइए। किसी भी कॉन्टैक्ट को कोई भी फोटो असाइन करें — DualProfile इसे अपने आप बदल देता है।`,
    identity_boss: `आपका बॉस`,
    identity_boss_sees: `प्रोफेशनल फोटो देखता है`,
    identity_friends: `आपके दोस्त`,
    identity_friends_sees: `असली आपको देखते हैं`,
    identity_family: `आपका परिवार`,
    identity_family_sees: `आपकी पसंद का रूप देखता है`,
    pricing_title: `सरल, ईमानदार मूल्य।`,
    pricing_sub: `जो चाहिए वो हमेशा मुफ़्त। एक वैकल्पिक अपग्रेड।`,
    free_label: `मुफ्त`,
    free_sub: `असीमित कॉन्टैक्ट + शेड्यूल्ड फ़ोटो`,
    free_trial_note: `क्रेडिट कार्ड की ज़रूरत नहीं`,
    free_forever: `हमेशा के लिए`,
    pro_label: 'Pro',
    pro_sub: `फोटो हिस्ट्री, बल्क असाइनमेंट, एक्सपोर्ट/इंपोर्ट और मल्टी-डिवाइस सिंक`,
    pro_mo: `/माह`,
    annual_label: `वार्षिक`,
    annual_sub: `असीमित + बल्क असाइन`,
    annual_yr: `/वर्ष`,
    lifetime_label: `आजीवन`,
    lifetime_sub: `एक बार भुगतान, हमेशा के लिए`,
    lifetime_once: `एकमुश्त`,
    badge_popular: `लोकप्रिय`,
    badge_value: `सर्वोत्तम मूल्य`,
    usd_approx: `लगभग`,
    feat_contacts_free: `असीमित कॉन्टैक्ट`,
    feat_contacts_pro: `असीमित कॉन्टैक्ट`,
    feat_trial: `बल्क कॉन्टैक्ट असाइनमेंट`,
    feat_preview: `लाइव प्रिव्यू`,
    feat_p2p: `कॉन्टैक्ट-टू-कॉन्टैक्ट प्राइवेट शेयरिंग`,
    feat_chrome: `Chrome और Edge`,
    feat_photo_history: `फोटो इतिहास और रिवर्ट`,
    feat_scheduled: `शेड्यूल्ड फोटो`,
    feat_export: `एक्सपोर्ट और इम्पोर्ट`,
    feat_sync: `मल्टी-डिवाइस सिंक`,
    feat_priority: `प्राथमिकता सहायता`,
    feat_nofee: `कोई आवर्ती शुल्क नहीं`,
    btn_start_trial: `मुफ़्त इंस्टॉल करें`,
    btn_get_pro: `Pro लें`,
    btn_get_annual: `वार्षिक लें`,
    btn_get_lifetime: `आजीवन लें`,
    trial_title: `3 दिन सब कुछ मुफ्त में आजमाएं।`,
    trial_desc: `मुफ़्त में शेड्यूल्ड फ़ोटो मिलती है — आपकी असली फोटो दिन और समय के हिसाब से बदलती है, कन्फर्म करने के लिए बस एक टैप, हर डिवाइस पर दिखती है, किसी और को कुछ इंस्टॉल करने की ज़रूरत नहीं — साथ ही असीमित पर-कॉन्टैक्ट असाइनमेंट भी। Pro एक बार का £29 भुगतान है जिसमें फ़ोटो हिस्ट्री, बल्क असाइनमेंट, एक्सपोर्ट/इम्पोर्ट, मल्टी-डिवाइस सिंक और प्राथमिकता सहायता मिलती है।`,
    trial_cta: `मुफ़्त इंस्टॉल करें`,
    social_title: `असली लोग। असली उपयोग।`,
    social_quote: `बॉस को प्रोफेशनल फोटो और दोस्तों को असली आप दिखाना बहुत काम का है`,
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `अकेले बनाया गया, काम और पर्सनल लाइफ के असली अलगाव के लिए।`,
    social_stat2: `बिना पेड मार्केटिंग के`,
    social_stat3: `r/DigitalPrivacy पर फीचर्ड`,
    viral_title: `एक WhatsApp। कई पहचान। आप तय करें कौन क्या देखे।`,
    viral_sub: `इंस्टॉल मुफ़्त। असीमित कॉन्टैक्ट, हमेशा मुफ़्त।`,
    viral_cta: `मुफ्त ट्रायल शुरू करें`,
    viral_note: `असीमित कॉन्टैक्ट हमेशा मुफ़्त · Pro एक बार £29, कभी सब्सक्रिप्शन नहीं`,
    faq_title: `अक्सर पूछे जाने वाले सवाल`,
    faq_sub: `सवाल हैं? जवाब हमारे पास हैं।`,
    faq_1_q: `क्या मेरे कॉन्टैक्ट को कुछ इंस्टॉल करना होगा?`,
    faq_1_a: `हाँ — DualProfile P2P काम करता है। जब आप फोटो असाइन करते हैं और कॉन्टैक्ट के पास DualProfile है, तो फोटो अपने आप दिखती है।`,
    faq_2_q: `क्या यह WhatsApp मोबाइल ऐप पर काम करता है?`,
    faq_2_a: `शेड्यूल्ड फ़ोटो आपकी असली WhatsApp फोटो बदलती है, तो बदलने के बाद इसे हर कोई हर जगह देखता है, मोबाइल भी शामिल। पर-कॉन्टैक्ट असाइनमेंट अलग है — यह सिर्फ WhatsApp Web पर दिखता है, और सिर्फ उन कॉन्टैक्ट्स को जिनके पास भी DualProfile इंस्टॉल है।`,
    faq_3_q: `मुफ़्त में क्या है और Pro में क्या जुड़ता है?`,
    faq_3_a: `मुफ़्त में असीमित कॉन्टैक्ट और शेड्यूल्ड फ़ोटो हमेशा के लिए मिलती हैं, बिना कार्ड के। Pro एक बार का £29 भुगतान है (सब्सक्रिप्शन नहीं) और इसमें फ़ोटो हिस्ट्री, बल्क असाइनमेंट, एक्सपोर्ट/इम्पोर्ट, मल्टी-डिवाइस सिंक और प्राथमिकता सहायता जुड़ती है।`,
    faq_4_q: `क्या मेरा डेटा सुरक्षित है?`,
    faq_4_a: `आपकी फ़ोटो सुरक्षित रूप से सिंक की जाती हैं ताकि वे केवल आपके चुने हुए संपर्कों को दिखें। हम कभी भी आपके मैसेज नहीं पढ़ते या आपकी चैट तक नहीं पहुँचते।`,
    faq_5_q: `क्या शेड्यूल्ड फ़ोटो के लिए किसी और को DualProfile इंस्टॉल करना पड़ता है?`,
    faq_5_a: `नहीं। यह आपके अपने अकाउंट की असली फोटो बदलता है, इसलिए किसी और को कुछ भी इंस्टॉल करने की ज़रूरत नहीं — इसीलिए यह पहले ही दिन से काम करता है।`,
    footer_rights: `सर्वाधिकार सुरक्षित।`,
    footer_note: `आपकी फ़ोटो सुरक्षित रूप से सिंक होती हैं — केवल आपके चुने हुए संपर्क ही उन्हें देख सकते हैं।`,
    copied_msg: `कॉपी किया!`,
    callout_btn: `इंस्टॉल लिंक कॉपी करें`,
    preview_callout: `अपने संपर्कों के इंस्टॉल करने का इंतज़ार नहीं करना चाहते? प्रीव्यू मोड का उपयोग करें और तुरंत देखें कि आप किसी को भी कैसे दिखेंगे।`,
    demo_privacy: `यह पूरी तरह WhatsApp Web पर काम करता है। कोई चैट डेटा संग्रहीत नहीं होता।`,
    demo_caption: `देखें कि प्रिव्यू मोड प्रत्येक कॉन्टैक्ट को क्या दिखता है।`,
    how_title: `एक बार सेट करें। अपने आप काम करे।`,
    how_sub: `यह पर-कॉन्टैक्ट फोटो के लिए है। शेड्यूल्ड फ़ोटो के लिए किसी और के साथ कोई सेटअप नहीं चाहिए — बस अपने समय सेट करें और हर बदलाव को एक टैप से कन्फर्म करें।`,
    step1_title: `DualProfile इंस्टॉल करें और फोटो अपलोड करें।`,
    step1_sub: `एक काम के लिए। एक जीवन के लिए।`,
    step2_title: `तय करें कौन सा कॉन्टैक्ट कौन सी फोटो देखे।`,
    step2_sub: `लगभग 2 मिनट लगते हैं।`,
    step3_title: `वे भी इंस्टॉल करें — फोटो अपने आप बदल जाती है।`,
    step3_sub: `सेटअप के बाद कोई अतिरिक्त चरण नहीं।`,
    callout_text: `DualProfile तब काम करता है जब दोनों ने इंस्टॉल किया हो। लिंक भेजें — 3 मिनट।`,
    until_now: `अब तक।`,
    reddit_title: `जवाब हमेशा नहीं था।`,
    reddit_sub: `DualProfile से पहले, एकमात्र उपाय दूसरा नंबर लेना था। अब नहीं।`,
    reddit_1_q: `"क्या अलग-अलग लोगों को अलग-अलग प्रोफाइल फोटो दिखाने का तरीका है?"`,
    reddit_1_a: `शीर्ष उत्तर: नहीं।`,
    reddit_2_q: `"वेब और ऐप पर अलग प्रोफाइल फोटो — क्या यह संभव है?"`,
    reddit_2_a: `शीर्ष उत्तर: सिर्फ दो नंबर से।`,
    reddit_3_q: `"WhatsApp को कई प्रोफाइल फोटो सपोर्ट करनी चाहिए।"`,
    reddit_3_a: `शीर्ष उत्तर: [हटाया गया]`,
    status_title: `वर्तमान स्थिति`,
    status_1_title: `प्रिव्यू मोड`,
    status_1_desc: `देखें दूसरे आपको कैसे देखते हैं`,
    status_2_title: `प्राइवेट कॉन्टैक्ट शेयरिंग`,
    status_2_desc: `रीयल-टाइम प्रोफाइल स्विचिंग — दूसरे कॉन्टैक्ट के पास भी DualProfile इंस्टॉल होना जरूरी है`,
    status_3_title: `ग्रुप चैट`,
    status_3_desc: `अभी समर्थित नहीं`,
    modal_title: `DualProfile इंस्टॉल करें`,
    modal_sub: `3 दिन का मुफ्त ट्रायल शुरू करें। कोई कार्ड नहीं। WhatsApp Web पर काम करता है।`,
    modal_btn: `मुफ्त ट्रायल शुरू करें`,
    modal_note: `असीमित संपर्क, हमेशा मुफ़्त · क्रेडिट कार्ड की ज़रूरत नहीं`,
  },
  zh: {
    feat_future: `包含所有未来功能`,
    feat_everything_free: `包含免费版全部功能`,
    pro_once: `一次性付款 · 无订阅`,
    hero_h1_1: `那为什么你的照片`,
    hero_h1_2: `对所有人都一样，`,
    hero_h1_new: `同一个WhatsApp，给不同的人看不同的照片。`,
    hero_now: `而你却不是？`,
    hero_sub: `让工作联系人看到你的职业照片，其他人看到你的私人照片。自动完成。`,
    hero_cta: `开始免费试用`,
    hero_cta_sub: `永久免费 · 无限联系人 · 随时升级`,
    hero_social_proof: `为那些用同一个WhatsApp账号处理工作和生活的人打造。`,
    hero_scheduled_note: `定时照片在你自己的账号上运行——不需要任何人安装任何东西。`,
    hero_p2p_note: `想让不同的人看到不同的照片吗？使用私密联系人共享。`,
    visual_demo_title: `切换一次，同步所有设备。`,
    visual_demo_sub: `只需切换一次头像，DualProfile连接的所有设备都会同步更新。`,
    visual_demo_time1: `上午8:59`,
    visual_demo_label1: `私人照片`,
    visual_demo_time2: `上午9:00`,
    visual_demo_switch: `立即切换`,
    visual_demo_label2: `职业照片`,
    visual_demo_device1: `WhatsApp 桌面版`,
    visual_demo_device2: `WhatsApp 手机版`,
    is_for_me_title: `这适合我吗？`,
    is_for_me_q1: `定时照片`,
    is_for_me_q1_point1: `立即生效`,
    is_for_me_q1_point2: `联系人无需安装DualProfile`,
    is_for_me_q1_point3: `更改你真实的WhatsApp头像`,
    is_for_me_q1_point4: `手机和电脑上都会同步显示`,
    is_for_me_q2: `私密联系人照片`,
    is_for_me_q2_point1: `是的，用法相同`,
    is_for_me_q2_point2: `双方都需要安装DualProfile`,
    is_for_me_q2_point3: `支持WhatsApp网页版`,
    faq_6_q: `如果我分享的对象没有安装DualProfile会怎样？`,
    faq_6_a: `私密联系人共享需要双方都安装DualProfile。如果对方没有安装，他们将看不到你分配的照片——但定时照片仍会在你自己的账号上正常运行。`,
    faq_7_q: `Pro是订阅制吗？`,
    faq_7_a: `不是。Pro是一次性付费£29。你将永久拥有它，包括未来的Pro功能，无需重复付费。`,
    security_title: `隐私保护，从设计开始`,
    security_point1: `我们不读取你的聊天记录。不存储任何聊天数据。`,
    security_point2: `我们永远看不到消息内容——只看到你选择展示的照片。`,
    security_point3: `联系人姓名永远不会存储在我们的服务器上。`,
    what_happens_where_title: `各处会发生什么`,
    what_contacts_see_label: `你的联系人会看到什么`,
    what_contacts_see_val: `你选择的照片。对他们来说其他一切都不会改变。`,
    what_phone_label: `你手机上会发生什么`,
    what_phone_val: `你的WhatsApp头像会自动更新——按计划，或在你分配的那一刻。`,
    what_web_label: `WhatsApp网页版会发生什么`,
    what_web_val: `同一张照片会自动同步，无需额外设置。`,
    what_requires_install_label: `什么情况需要额外安装`,
    what_requires_install_val: `只有私密联系人共享（Pro）需要。定时照片从不需要任何人安装任何东西。`,
    share_hook_1: `你的老板和你最好的朋友在WhatsApp上看到的是同一张你的照片。`,
    share_hook_2: `直到现在。`,
    share_hook_3: `WhatsApp从未让这成为可能。所以我们做到了。`,
    hero_demo: `观看演示`,
    live_badge: `永久免费 · 无限联系人 · 随时升级`,
    nav_features: `功能`,
    nav_demo: `演示`,
    nav_pricing: `定价`,
    nav_faq: `常见问题`,
    nav_cta: `开始免费试用`,
    features_title: `一个 WhatsApp。多重身份。`,
    features_sub: `由你决定谁看到什么。`,
    feat1_title: `定时头像`,
    feat1_desc: `你真实的 WhatsApp 头像会按日期和时间切换——9点到18点用工作照，其余时间用生活照。一键确认每次切换，所有设备上都能看到，无需其他任何人安装任何东西。`,
    feat2_title: `照片历史与还原`,
    feat2_desc: `恢复每个位置最近上传的3张照片中的任意一张。改变主意了？一键返回。`,
    feat3_title: `导出和导入`,
    feat3_desc: `将所有联系人分配保存为JSON文件。在任何设备上即时恢复。`,
    feat4_title: `多设备同步`,
    feat4_desc: `您的偏好设置会在所有设备上自动同步。`,
    feat_pro_badge: 'Pro',
    feat_annual_badge: '年度',
    feat_lifetime_badge: 'Lifetime',
    identity_title: `你不会用对老板的方式跟最好的朋友说话。`,
    identity_sub: `那也别让他们看到同一张照片。给任何联系人分配任何照片——DualProfile会自动切换。`,
    identity_boss: `您的老板`,
    identity_boss_sees: `看到您的专业照片`,
    identity_friends: `您的朋友`,
    identity_friends_sees: `看到真实的您`,
    identity_family: `您的家人`,
    identity_family_sees: `看到您选择的版本`,
    pricing_title: `简单透明的定价。`,
    pricing_sub: `真正需要的功能永久免费。一次可选升级。`,
    free_label: `免费`,
    free_sub: `无限联系人 + 定时头像`,
    free_trial_note: `无需信用卡`,
    free_forever: `永久`,
    pro_label: 'Pro',
    pro_sub: `照片历史记录、批量分配、导出/导入及多设备同步`,
    pro_mo: `/月`,
    annual_label: `年度`,
    annual_sub: `无限联系人 + 批量分配`,
    annual_yr: `/年`,
    lifetime_label: `终身`,
    lifetime_sub: `一次付款，永久使用`,
    lifetime_once: `一次性付款`,
    badge_popular: `热门`,
    badge_value: `最佳价值`,
    usd_approx: `约`,
    feat_contacts_free: `无限联系人`,
    feat_contacts_pro: `无限联系人`,
    feat_trial: `批量联系人分配`,
    feat_preview: `实时预览`,
    feat_p2p: `联系人对联系人的私密共享`,
    feat_chrome: `Chrome和Edge`,
    feat_photo_history: `照片历史与恢复`,
    feat_scheduled: `定时照片`,
    feat_export: `导出和导入`,
    feat_sync: `多设备同步`,
    feat_priority: `优先支持`,
    feat_nofee: `无定期费用`,
    btn_start_trial: `免费安装`,
    btn_get_pro: `获取Pro`,
    btn_get_annual: `获取年度`,
    btn_get_lifetime: `获取终身`,
    trial_title: `免费试用3天所有功能。`,
    trial_desc: `免费版为你提供定时头像——你真实的头像按日期和时间切换，一键确认，所有设备上都能看到，无需其他任何人安装任何东西，还有无限的按联系人分配功能。Pro 是一次性 £29 付款，增加头像历史与还原、批量分配、导出/导入、多设备同步和优先支持。`,
    trial_cta: `免费安装`,
    social_title: `真实用户。真实用例。`,
    social_quote: `让你的老板看到专业照片而朋友看到真实的你真的很方便`,
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `独立开发，只为真正区分工作与生活。`,
    social_stat2: `无付费营销`,
    social_stat3: `在r/DigitalPrivacy上获得推荐`,
    viral_title: `一个WhatsApp。多重身份。由你决定谁看到什么。`,
    viral_sub: `免费安装。无限联系人，永久免费。`,
    viral_cta: `开始免费试用`,
    viral_note: `无限联系人永久免费 · Pro 仅需一次性 £29，绝非订阅`,
    faq_title: `常见问题`,
    faq_sub: `有疑问？我们有解答。`,
    faq_1_q: `我的联系人需要安装什么吗？`,
    faq_1_a: `是的 — DualProfile采用P2P方式运行。当您分配照片且联系人安装了DualProfile后，您的照片会自动出现在对方屏幕上。`,
    faq_2_q: `这在WhatsApp手机应用上有效吗？`,
    faq_2_a: `定时头像会更改你真实的 WhatsApp 头像，所以一旦切换，所有人在任何地方都能看到，包括手机。按联系人分配则不同——它只在 WhatsApp Web 上显示，而且只有同样安装了 DualProfile 的联系人才能看到。`,
    faq_3_q: `免费版有什么？Pro 增加什么？`,
    faq_3_a: `免费版永久提供无限联系人和定时头像，无需信用卡。Pro 是一次性 £29 付款（非订阅），增加头像历史与还原、批量分配、导出/导入、多设备同步和优先支持。`,
    faq_4_q: `我的数据安全吗？`,
    faq_4_a: `您的照片会安全同步，仅对您选择的联系人可见。我们绝不会读取您的消息或访问您的聊天记录。`,
    faq_5_q: `定时头像需要其他人也安装 DualProfile 吗？`,
    faq_5_a: `不需要。它更改的是你自己账号的真实头像，所以不需要任何人安装任何东西——这正是它从第一天起就能用的原因。`,
    footer_rights: `保留所有权利。`,
    footer_note: `您的照片会安全同步 — 只有您选择的联系人才能看到。`,
    copied_msg: `已复制！`,
    callout_btn: `复制安装链接`,
    preview_callout: `不想等联系人安装？使用预览模式立即查看您在任何人眼中的样子。`,
    demo_privacy: `完全在WhatsApp Web上运行。不存储任何聊天数据。`,
    demo_caption: `查看预览模式如何准确显示每个联系人看到的内容。`,
    how_title: `一次设置。自动运行。`,
    how_sub: `以上适用于按联系人分配照片。定时头像无需与任何人一起设置——只需设定好时间，每次切换一键确认即可。`,
    step1_title: `安装DualProfile并上传您的照片。`,
    step1_sub: `一张用于工作，一张用于生活。`,
    step2_title: `为每个联系人分配对应的照片。`,
    step2_sub: `大约需要2分钟。`,
    step3_title: `他们也安装后，您的照片自动切换。`,
    step3_sub: `设置完成后无需额外操作。`,
    callout_text: `DualProfile需要双方都安装后才能生效。发送链接 — 设置只需3分钟。`,
    until_now: `直到现在。`,
    reddit_title: `答案总是否定的。`,
    reddit_sub: `在DualProfile出现之前，唯一的解决方案是拥有第二个号码。现在不同了。`,
    reddit_1_q: `"有没有办法向不同的人显示不同的个人资料图片？"`,
    reddit_1_a: `最佳答案：不行。`,
    reddit_2_q: `"网页版和手机版显示不同的头像——可能吗？"`,
    reddit_2_a: `最佳答案：只有拥有两个电话号码才行。`,
    reddit_3_q: `"WhatsApp应该支持多张个人资料照片。"`,
    reddit_3_a: `最佳答案：[已删除]`,
    status_title: `当前状态`,
    status_1_title: `预览模式`,
    status_1_desc: `查看他人如何看到您的资料`,
    status_2_title: `私密联系人共享`,
    status_2_desc: `实时头像切换——需要对方也安装DualProfile`,
    status_3_title: `群聊`,
    status_3_desc: `暂不支持`,
    modal_title: `安装DualProfile`,
    modal_sub: `开始您的3天免费试用。无需信用卡。在WhatsApp Web上运行。`,
    modal_btn: `开始免费试用`,
    modal_note: `3天完整访问 · 无限联系人永久免费 · 无需信用卡`,
  },
  ja: {
    feat_future: `今後のすべての機能を含む`,
    feat_everything_free: `無料版のすべて`,
    pro_once: `買い切り · サブスクなし`,
    hero_h1_1: `なのになぜ、あなたの写真は`,
    hero_h1_2: `誰に対しても同じで、`,
    hero_h1_new: `1つのWhatsAppで、相手ごとに違う写真を。`,
    hero_now: `あなた自身は違うのに？`,
    hero_sub: `仕事の連絡先にはプロフェッショナルな写真を、それ以外の人には個人的な写真を表示します。自動的に。`,
    hero_cta: `無料トライアルを開始`,
    hero_cta_sub: `永久無料 · 無制限の連絡先 · いつでもアップグレード`,
    hero_social_proof: `仕事とプライベートで1つのWhatsAppアカウントを使う人のために作られました。`,
    hero_scheduled_note: `スケジュール写真はあなた自身のアカウントで動作します——他の誰かが何かをインストールする必要はありません。`,
    hero_p2p_note: `相手によって違う写真を見せたいですか？プライベート連絡先共有をご利用ください。`,
    visual_demo_title: `1回の切り替えで、すべてのデバイスに反映。`,
    visual_demo_sub: `写真を一度切り替えるだけで、DualProfileが接続されているすべてのデバイスで更新されます。`,
    visual_demo_time1: `午前8:59`,
    visual_demo_label1: `個人用の写真`,
    visual_demo_time2: `午前9:00`,
    visual_demo_switch: `今すぐ切り替え`,
    visual_demo_label2: `仕事用の写真`,
    visual_demo_device1: `WhatsApp デスクトップ`,
    visual_demo_device2: `WhatsApp スマートフォン`,
    is_for_me_title: `これは自分に合っている？`,
    is_for_me_q1: `スケジュール写真`,
    is_for_me_q1_point1: `すぐに使える`,
    is_for_me_q1_point2: `相手はDualProfileを必要としない`,
    is_for_me_q1_point3: `実際のWhatsAppの写真を変更する`,
    is_for_me_q1_point4: `スマートフォンとパソコンの両方に反映される`,
    is_for_me_q2: `プライベート連絡先写真`,
    is_for_me_q2_point1: `はい、同じように機能します`,
    is_for_me_q2_point2: `両方がDualProfileを必要とします`,
    is_for_me_q2_point3: `WhatsApp Webでも使えます`,
    faq_6_q: `共有相手がDualProfileをインストールしなかった場合はどうなりますか？`,
    faq_6_a: `プライベート連絡先共有には、双方がDualProfileをインストールしている必要があります。相手がインストールしていない場合、割り当てた写真は表示されません——ただしスケジュール写真は、あなた自身のアカウントで問題なく機能し続けます。`,
    faq_7_q: `Proはサブスクリプションですか？`,
    faq_7_a: `いいえ。Proは£29の一回限りの支払いです。今後のPro機能も含めて、追加料金なしでずっとご利用いただけます。`,
    security_title: `設計段階からのプライバシー保護`,
    security_point1: `チャットの内容は読み取りません。チャットデータは保存されません。`,
    security_point2: `メッセージの内容を見ることは一切ありません——表示することを選んだ写真だけを扱います。`,
    security_point3: `連絡先の名前が当社サーバーに保存されることはありません。`,
    what_happens_where_title: `どこで何が起こるか`,
    what_contacts_see_label: `連絡先に表示されるもの`,
    what_contacts_see_val: `あなたが選んだ写真です。それ以外は相手にとって何も変わりません。`,
    what_phone_label: `スマートフォンで起こること`,
    what_phone_val: `WhatsAppのプロフィール写真が自動的に更新されます——スケジュール通り、または割り当てた瞬間に。`,
    what_web_label: `WhatsApp Webで起こること`,
    what_web_val: `同じ写真が自動的に同期されます。別途設定は必要ありません。`,
    what_requires_install_label: `追加のインストールが必要な場合`,
    what_requires_install_val: `プライベート連絡先共有（Pro）のみです。スケジュール写真は、他の誰かが何かをインストールする必要が一切ありません。`,
    share_hook_1: `あなたの上司と一番の友人は、WhatsAppで同じあなたの写真を見ています。`,
    share_hook_2: `今までは。`,
    share_hook_3: `WhatsAppはこれを実現しませんでした。だから私たちが作りました。`,
    hero_demo: `デモを見る`,
    live_badge: `永久無料 · 無制限の連絡先 · いつでもアップグレード`,
    nav_features: `機能`,
    nav_demo: `デモ`,
    nav_pricing: `料金`,
    nav_faq: `よくある質問`,
    nav_cta: `無料トライアルを開始`,
    features_title: `1つのWhatsApp。複数のアイデンティティ。`,
    features_sub: `誰が何を見るかはあなたが決めます。`,
    feat1_title: `スケジュール写真`,
    feat1_desc: `あなたの本物のWhatsApp写真が曜日と時間帯で切り替わります——9時〜18時は仕事用、それ以外はプライベート用。切り替えはワンタップで確認するだけ、すべてのデバイスに反映され、相手側は何もインストールする必要がありません。`,
    feat2_title: `写真履歴と復元`,
    feat2_desc: `各スロットの直近3枚のアップロード写真から復元できます。気が変わった？ワンタップで元に戻せます。`,
    feat3_title: `エクスポートとインポート`,
    feat3_desc: `全てのコンタクト割り当てをJSONファイルとしてバックアップ。どのデバイスでもすぐに復元。`,
    feat4_title: `マルチデバイス同期`,
    feat4_desc: `設定が全デバイスに自動的に同期されます。`,
    feat_pro_badge: 'Pro',
    feat_annual_badge: '年間',
    feat_lifetime_badge: 'Lifetime',
    identity_title: `上司と親友では話し方が違うはず。`,
    identity_sub: `なら見せる写真も同じである必要はありません。どのコンタクトにもどの写真でも割り当てられます——DualProfileが自動的に切り替えます。`,
    identity_boss: `上司`,
    identity_boss_sees: `プロフェッショナルな写真を見る`,
    identity_friends: `友達`,
    identity_friends_sees: `本当のあなたを見る`,
    identity_family: `家族`,
    identity_family_sees: `あなたが選んだバージョンを見る`,
    pricing_title: `シンプルで正直な料金。`,
    pricing_sub: `本当に必要な機能はずっと無料。任意のアップグレードは1つだけ。`,
    free_label: `無料`,
    free_sub: `無制限のコンタクト + スケジュール写真`,
    free_trial_note: `クレジットカード不要`,
    free_forever: `永久`,
    pro_label: 'Pro',
    pro_sub: `写真の履歴、一括割り当て、エクスポート/インポート、複数デバイス間の同期`,
    pro_mo: `/月`,
    annual_label: `年間`,
    annual_sub: `無制限 + 一括割り当て`,
    annual_yr: `/年`,
    lifetime_label: `生涯`,
    lifetime_sub: `一度支払うと永久に使える`,
    lifetime_once: `一括払い`,
    badge_popular: `人気`,
    badge_value: `最もお得`,
    usd_approx: `約`,
    feat_contacts_free: `無制限のコンタクト`,
    feat_contacts_pro: `無制限のコンタクト`,
    feat_trial: `一括連絡先割り当て`,
    feat_preview: `ライブプレビュー`,
    feat_p2p: `連絡先間のプライベート共有`,
    feat_chrome: `ChromeとEdge`,
    feat_photo_history: `写真履歴と元に戻す`,
    feat_scheduled: `スケジュール写真`,
    feat_export: `エクスポートとインポート`,
    feat_sync: `マルチデバイス同期`,
    feat_priority: `優先サポート`,
    feat_nofee: `継続課金なし`,
    btn_start_trial: `無料でインストール`,
    btn_get_pro: `Proを取得`,
    btn_get_annual: `年間を取得`,
    btn_get_lifetime: `生涯を取得`,
    trial_title: `3日間全ての機能を無料でお試し。`,
    trial_desc: `無料版ではスケジュール写真が使えます——本物の写真が曜日と時間帯で切り替わり、ワンタップで確認するだけ、すべてのデバイスに反映され、相手側は何もインストールする必要がありません。さらに連絡先ごとの無制限の割り当ても可能です。Proは買い切り£29で、写真履歴と復元、一括割り当て、エクスポート/インポート、マルチデバイス同期、優先サポートが追加されます。`,
    trial_cta: `無料でインストール`,
    social_title: `リアルな人々。リアルな使い方。`,
    social_quote: `上司にはプロフェッショナルな写真を、友達には本当の自分を見せるのはとても便利`,
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `個人開発——仕事とプライベートを本当に分けるために。`,
    social_stat2: `有料マーケティングなし`,
    social_stat3: `r/DigitalPrivacyで紹介`,
    viral_title: `1つのWhatsApp。複数のアイデンティティ。誰が何を見るかはあなたが決めます。`,
    viral_sub: `インストール無料。無制限のコンタクトがずっと無料。`,
    viral_cta: `無料トライアルを開始`,
    viral_note: `無制限のコンタクトがずっと無料 · Proは1回£29のみ、サブスクではありません`,
    faq_title: `よくある質問`,
    faq_sub: `質問がありますか？答えがあります。`,
    faq_1_q: `コンタクトも何かインストールする必要がありますか？`,
    faq_1_a: `はい — DualProfileはP2Pで動作します。写真を割り当てたコンタクトがDualProfileをインストールすると、あなたの写真が自動的に表示されます。`,
    faq_2_q: `WhatsAppモバイルアプリで動作しますか？`,
    faq_2_a: `スケジュール写真は本物のWhatsApp写真を変更するので、切り替わると誰でもどこでも、モバイルでも見えるようになります。連絡先ごとの割り当ては違います——WhatsApp Webでしか表示されず、しかもDualProfileをインストールしている相手にしか見えません。`,
    faq_3_q: `無料版の内容とProの追加機能は？`,
    faq_3_a: `無料版では無制限のコンタクトとスケジュール写真がずっと使え、カード登録も不要です。Proは1回限りの£29（サブスクではありません）で、写真履歴と復元、一括割り当て、エクスポート/インポート、マルチデバイス同期、優先サポートが追加されます。`,
    faq_4_q: `データは安全ですか？`,
    faq_4_a: `あなたの写真は安全に同期され、選択した連絡先にのみ表示されます。メッセージを読んだり、チャットにアクセスすることは一切ありません。`,
    faq_5_q: `スケジュール写真を使うには、相手もDualProfileをインストールする必要がありますか？`,
    faq_5_a: `いいえ。これはあなた自身のアカウントの本物の写真を変更するものなので、相手は何もインストールする必要がありません。だからこそ、初日から使えるのです。`,
    footer_rights: `全著作権所有。`,
    footer_note: `あなたの写真は安全に同期されます — 選択した連絡先だけが見ることができます。`,
    copied_msg: `コピーしました！`,
    callout_btn: `インストールリンクをコピー`,
    preview_callout: `連絡先のインストールを待ちたくないですか？プレビューモードを使えば、誰にどう見えるかを今すぐ確認できます。`,
    demo_privacy: `これは完全にWhatsApp Webで動作します。チャットデータは保存されません。`,
    demo_caption: `プレビューモードが各コンタクトに見える内容を正確に表示する様子をご覧ください。`,
    how_title: `一度設定すれば自動で動作します。`,
    how_sub: `これは連絡先ごとの写真設定についてです。スケジュール写真は相手側の設定が一切不要です——時間帯を設定して、切り替えのたびにワンタップで確認するだけです。`,
    step1_title: `DualProfileをインストールし写真をアップロードします。`,
    step1_sub: `仕事用に一枚。プライベート用に一枚。`,
    step2_title: `各コンタクトにどの写真を見せるか割り当てます。`,
    step2_sub: `約2分で完了します。`,
    step3_title: `相手もインストールすると写真が自動で切り替わります。`,
    step3_sub: `設定後は追加の手順不要。`,
    callout_text: `DualProfileは両方がインストールしているときに機能します。リンクを送って — 3分で設定完了。`,
    until_now: `今まではそうでした。`,
    reddit_title: `答えはいつも「できない」でした。`,
    reddit_sub: `DualProfile以前、唯一の解決策は2つ目の番号を持つことでした。もうそれは不要です。`,
    reddit_1_q: `"異なる人に異なるプロフィール写真を表示する方法はありますか？"`,
    reddit_1_a: `ベストアンサー：できません。`,
    reddit_2_q: `"ウェブとアプリで異なるプロフィール写真 — 可能ですか？"`,
    reddit_2_a: `ベストアンサー：2つの電話番号があれば。`,
    reddit_3_q: `"WhatsAppは複数のプロフィール写真をサポートすべきです。"`,
    reddit_3_a: `ベストアンサー：[削除済み]`,
    status_title: `現在のステータス`,
    status_1_title: `プレビューモード`,
    status_1_desc: `他のユーザーからどう見えるか確認`,
    status_2_title: `プライベート連絡先共有`,
    status_2_desc: `リアルタイムのプロフィール切り替え——相手もDualProfileをインストールしている必要があります`,
    status_3_title: `グループチャット`,
    status_3_desc: `まだサポートされていません`,
    modal_title: `DualProfileをインストール`,
    modal_sub: `3日間の無料トライアルを開始。カード不要。WhatsApp Webで動作します。`,
    modal_btn: `無料トライアルを開始`,
    modal_note: `3日間フルアクセス・連絡先無制限で永久無料・カード不要`,
  },
  ru: {
    feat_future: `Все будущие функции включены`,
    feat_everything_free: `Всё из бесплатного плана`,
    pro_once: `разовый платёж · без подписки`,
    hero_h1_1: `Так почему же ваше фото`,
    hero_h1_2: `выглядит одинаково для всех,`,
    hero_h1_new: `Один WhatsApp. Разные фото для разных людей.`,
    hero_now: `хотя вы — нет?`,
    hero_sub: `Показывайте рабочим контактам профессиональное фото, а всем остальным — личное. Автоматически.`,
    hero_cta: `Начать бесплатный пробный период`,
    hero_cta_sub: `Бесплатно навсегда · Безлимитные контакты · Обновите когда угодно`,
    hero_social_proof: `Создано для тех, кто использует один аккаунт WhatsApp для работы и личной жизни.`,
    hero_scheduled_note: `Запланированные фото работают на вашем собственном аккаунте — никому больше ничего устанавливать не нужно.`,
    hero_p2p_note: `Хотите, чтобы разные люди видели разные фото? Используйте Приватный обмен по контактам.`,
    visual_demo_title: `Одно переключение. Все устройства.`,
    visual_demo_sub: `Смените фото один раз — оно обновится на всех устройствах, где подключен DualProfile.`,
    visual_demo_time1: `8:59`,
    visual_demo_label1: `Личное фото`,
    visual_demo_time2: `9:00`,
    visual_demo_switch: `Переключить сейчас`,
    visual_demo_label2: `Рабочее фото`,
    visual_demo_device1: `WhatsApp на компьютере`,
    visual_demo_device2: `WhatsApp на телефоне`,
    is_for_me_title: `Подходит ли это мне?`,
    is_for_me_q1: `Запланированные фото`,
    is_for_me_q1_point1: `Работает сразу`,
    is_for_me_q1_point2: `Контакту не нужен DualProfile`,
    is_for_me_q1_point3: `Меняет ваше настоящее фото в WhatsApp`,
    is_for_me_q1_point4: `Отображается и на телефоне, и на компьютере`,
    is_for_me_q2: `Приватные фото для контактов`,
    is_for_me_q2_point1: `Да, работает так же`,
    is_for_me_q2_point2: `DualProfile нужен обоим`,
    is_for_me_q2_point3: `Работает в WhatsApp Web`,
    faq_6_q: `Что будет, если человек, с которым я делюсь фото, не установит DualProfile?`,
    faq_6_a: `Для Приватного обмена по контактам нужно, чтобы DualProfile был установлен у обеих сторон. Если он не установлен, человек не увидит назначенное вами фото — Запланированные фото при этом продолжат нормально работать на вашем собственном аккаунте.`,
    faq_7_q: `Pro — это подписка?`,
    faq_7_a: `Нет. Pro — это разовый платеж £29. Вы получаете доступ навсегда, включая будущие функции Pro, без повторных списаний.`,
    security_title: `Конфиденциальность заложена в основу`,
    security_point1: `Мы не читаем ваши чаты. Данные переписки не сохраняются.`,
    security_point2: `Мы никогда не видим содержимое сообщений — только фото, которое вы решили показать.`,
    security_point3: `Имена контактов никогда не хранятся на наших серверах.`,
    what_happens_where_title: `Что и где происходит`,
    what_contacts_see_label: `Что видят ваши контакты`,
    what_contacts_see_val: `Фото, которое вы выбрали. Больше для них ничего не меняется.`,
    what_phone_label: `Что происходит на вашем телефоне`,
    what_phone_val: `Ваше фото профиля WhatsApp обновляется автоматически — по расписанию или сразу после назначения.`,
    what_web_label: `Что происходит в WhatsApp Web`,
    what_web_val: `То же самое фото синхронизируется автоматически. Отдельная настройка не нужна.`,
    what_requires_install_label: `Что требует дополнительной установки`,
    what_requires_install_val: `Только Приватный обмен по контактам (Pro). Для Запланированных фото никогда не требуется, чтобы кто-то ещё что-то устанавливал.`,
    share_hook_1: `Ваш начальник и лучший друг видят одно и то же фото вас в WhatsApp.`,
    share_hook_2: `До сих пор.`,
    share_hook_3: `WhatsApp никогда не делал это возможным. Поэтому мы сделали.`,
    hero_demo: `Смотреть демо`,
    live_badge: `Бесплатно навсегда · Безлимитные контакты · Обновите когда угодно`,
    nav_features: `Функции`,
    nav_demo: `Демо`,
    nav_pricing: `Цены`,
    nav_faq: 'FAQ',
    nav_cta: `Начать бесплатный пробный период`,
    features_title: `Один WhatsApp. Несколько идентичностей.`,
    features_sub: `Вы решаете, кто что видит.`,
    feat1_title: `Фото по расписанию`,
    feat1_desc: `Ваше настоящее фото в WhatsApp меняется по дням и времени: рабочее фото с 9 до 18, личное в остальное время. Одно нажатие подтверждает каждое изменение, видно на всех устройствах, никому больше не нужно ничего устанавливать.`,
    feat2_title: `История фото и восстановление`,
    feat2_desc: `Восстановите любое из последних 3 загруженных фото для каждого слота. Передумали? Один тап, чтобы вернуться назад.`,
    feat3_title: `Экспорт и импорт`,
    feat3_desc: `Сохраните все назначения контактов в виде JSON-файла. Мгновенное восстановление на любом устройстве.`,
    feat4_title: `Многоустройственная синхронизация`,
    feat4_desc: `Ваши настройки автоматически синхронизируются на всех устройствах.`,
    feat_pro_badge: 'Pro',
    feat_annual_badge: 'Годовой',
    feat_lifetime_badge: 'Lifetime',
    identity_title: `Вы же не говорите с начальником так, как с лучшим другом.`,
    identity_sub: `Так зачем показывать им одно и то же фото? Назначьте любое фото любому контакту — DualProfile переключит его автоматически.`,
    identity_boss: `Ваш начальник`,
    identity_boss_sees: `Видит ваше профессиональное фото`,
    identity_friends: `Ваши друзья`,
    identity_friends_sees: `Видят настоящего вас`,
    identity_family: `Ваша семья`,
    identity_family_sees: `Видят выбранную вами версию`,
    pricing_title: `Простые и честные цены.`,
    pricing_sub: `Всё нужное — бесплатно навсегда. Одно необязательное улучшение.`,
    free_label: `Бесплатно`,
    free_sub: `Неограниченные контакты + Фото по расписанию`,
    free_trial_note: `Без кредитной карты`,
    free_forever: `навсегда`,
    pro_label: 'Pro',
    pro_sub: `История фото, массовое назначение, экспорт/импорт и синхронизация между устройствами`,
    pro_mo: `/месяц`,
    annual_label: `Годовой`,
    annual_sub: `Безлимит + массовое назначение`,
    annual_yr: `/год`,
    lifetime_label: `Пожизненный`,
    lifetime_sub: `Платите один раз навсегда`,
    lifetime_once: `единовременно`,
    badge_popular: `ПОПУЛЯРНЫЙ`,
    badge_value: `ЛУЧШАЯ ЦЕНА`,
    usd_approx: `прибл.`,
    feat_contacts_free: `Неограниченные контакты`,
    feat_contacts_pro: `Неограниченные контакты`,
    feat_trial: `Массовое назначение контактов`,
    feat_preview: `Предпросмотр в реальном времени`,
    feat_p2p: `Приватный обмен фото между контактами`,
    feat_chrome: `Chrome и Edge`,
    feat_photo_history: `История фото и возврат`,
    feat_scheduled: `Запланированные фото`,
    feat_export: `Экспорт и импорт`,
    feat_sync: `Многоустройственная синхронизация`,
    feat_priority: `Приоритетная поддержка`,
    feat_nofee: `Без регулярных платежей`,
    btn_start_trial: `Установить бесплатно`,
    btn_get_pro: `Получить Pro`,
    btn_get_annual: `Получить Годовой`,
    btn_get_lifetime: `Получить Пожизненный`,
    trial_title: `Попробуйте всё бесплатно в течение 3 дней.`,
    trial_desc: `Бесплатный план даёт Фото по расписанию: ваше настоящее фото меняется по дням и времени, одно нажатие для подтверждения, видно на всех устройствах, никому больше не нужно ничего устанавливать — плюс неограниченные назначения по контактам. Pro — это разовый платёж £29, который добавляет Историю фото, массовое назначение, Экспорт/Импорт, синхронизацию между устройствами и приоритетную поддержку.`,
    trial_cta: `Установить бесплатно`,
    social_title: `Реальные люди. Реальные случаи.`,
    social_quote: `то, что начальник видит что-то профессиональное, а друзья видят настоящего тебя — очень удобно`,
    social_attr: 'Competitive_Log_8093, r/DigitalPrivacy',
    social_stat1: `Создано в одиночку, для настоящего разделения работы и личной жизни.`,
    social_stat2: `Без платной рекламы`,
    social_stat3: `Рекомендовано на r/DigitalPrivacy`,
    viral_title: `Один WhatsApp. Несколько идентичностей. Вы решаете, кто что видит.`,
    viral_sub: `Установка бесплатна. Неограниченные контакты, бесплатно навсегда.`,
    viral_cta: `Начать бесплатный пробный период`,
    viral_note: `Неограниченные контакты бесплатно навсегда · Pro — £29 один раз, никогда не подписка`,
    faq_title: `Часто задаваемые вопросы`,
    faq_sub: `Есть вопросы? У нас есть ответы.`,
    faq_1_q: `Нужно ли моему контакту что-то устанавливать?`,
    faq_1_a: `Да — DualProfile работает по принципу P2P. Когда вы назначаете фото и у контакта установлен DualProfile, ваше фото появляется автоматически.`,
    faq_2_q: `Работает ли это в мобильном приложении WhatsApp?`,
    faq_2_a: `Фото по расписанию меняет ваше настоящее фото в WhatsApp, поэтому после переключения его видят все и везде, включая мобильные устройства. Назначение по контактам работает иначе — оно видно только в WhatsApp Web и только тем контактам, у которых тоже установлен DualProfile.`,
    faq_3_q: `Что бесплатно и что добавляет Pro?`,
    faq_3_a: `Бесплатно вы получаете неограниченные контакты и Фото по расписанию навсегда, без карты. Pro — разовый платёж £29 (не подписка), добавляющий историю фото и откат, массовое назначение, экспорт/импорт, синхронизацию между устройствами и приоритетную поддержку.`,
    faq_4_q: `Мои данные в безопасности?`,
    faq_4_a: `Ваши фото надёжно синхронизируются и видны только выбранным вами контактам. Мы никогда не читаем ваши сообщения и не получаем доступ к чатам.`,
    faq_5_q: `Нужно ли кому-то ещё устанавливать DualProfile для работы Фото по расписанию?`,
    faq_5_a: `Нет. Функция меняет настоящее фото вашего собственного аккаунта, поэтому никому больше не нужно ничего устанавливать — именно поэтому она работает с первого дня.`,
    footer_rights: `Все права защищены.`,
    footer_note: `Ваши фото надёжно синхронизируются — видеть их могут только выбранные вами контакты.`,
    copied_msg: `Скопировано!`,
    callout_btn: `Скопировать ссылку для установки`,
    preview_callout: `Не хотите ждать, пока ваши контакты установят расширение? Используйте Режим предпросмотра, чтобы сразу увидеть, как вы будете выглядеть для любого человека.`,
    demo_privacy: `Работает полностью в WhatsApp Web. Данные чатов не хранятся.`,
    demo_caption: `Посмотрите, как режим предпросмотра показывает именно то, что видит каждый контакт.`,
    how_title: `Настройте один раз. Работает автоматически.`,
    how_sub: `Это про фото для конкретных контактов. Для Фото по расписанию не нужна настройка ни с чьей стороны: просто задайте время и подтверждайте каждое переключение одним нажатием.`,
    step1_title: `Установите DualProfile и загрузите свои фото.`,
    step1_sub: `Одно для работы. Одно для жизни.`,
    step2_title: `Назначьте, какое фото видит каждый контакт.`,
    step2_sub: `Занимает около 2 минут.`,
    step3_title: `Они тоже устанавливают — ваше фото меняется автоматически.`,
    step3_sub: `После настройки дополнительных шагов не нужно.`,
    callout_text: `DualProfile работает, когда оба установили расширение. Отправьте ссылку — 3 минуты.`,
    until_now: `До сегодняшнего дня.`,
    reddit_title: `Ответ всегда был нет.`,
    reddit_sub: `До DualProfile единственным решением был второй номер. Теперь нет.`,
    reddit_1_q: `"Есть ли способ показывать разным людям разные фото профиля?"`,
    reddit_1_a: `Лучший ответ: Нет.`,
    reddit_2_q: `"Разное фото профиля в веб-версии и приложении — возможно ли это?"`,
    reddit_2_a: `Лучший ответ: Только если у вас два номера телефона.`,
    reddit_3_q: `"WhatsApp должен поддерживать несколько фото профиля."`,
    reddit_3_a: `Лучший ответ: [удалено]`,
    status_title: `Текущий статус`,
    status_1_title: `Режим предпросмотра`,
    status_1_desc: `Смотрите, как вас видят другие`,
    status_2_title: `Приватный обмен по контактам`,
    status_2_desc: `Переключение профиля в реальном времени — требует, чтобы у другого контакта тоже был установлен DualProfile`,
    status_3_title: `Групповые чаты`,
    status_3_desc: `Пока не поддерживается`,
    modal_title: `Установить DualProfile`,
    modal_sub: `Начните 3-дневный бесплатный пробный период. Без карты. Работает в WhatsApp Web.`,
    modal_btn: `Начать бесплатный пробный период`,
    modal_note: `Безлимитные контакты, бесплатно навсегда · Без кредитной карты`,
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
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [wcMuted, setWcMuted] = useState(false);
  const [wcConfettiDone, setWcConfettiDone] = useState(false);

  // World Cup 2026 — tournament data
  const WC_TEAMS = [
    { day:1,  date:'2026-06-29', country:'Ghana',        flag:'🇬🇭', primary:'#006B3F', secondary:'#FCD116', slogan:'Stand proudly.' },
    { day:2,  date:'2026-06-28', country:'Brazil',       flag:'🇧🇷', primary:'#009C3B', secondary:'#FFDF00', slogan:'Play beautifully.' },
    { day:3,  date:'2026-06-30', country:'France',       flag:'🇫🇷', primary:'#002395', secondary:'#FFFFFF', slogan:'Be brilliant.' },
    { day:4,  date:'2026-07-01', country:'Argentina',    flag:'🇦🇷', primary:'#74ACDF', secondary:'#FFFFFF', slogan:'Be unforgettable.' },
    { day:5,  date:'2026-07-02', country:'Spain',        flag:'🇪🇸', primary:'#AA151B', secondary:'#F1BF00', slogan:'Own every room.' },
    { day:6,  date:'2026-07-03', country:'Belgium',      flag:'🇧🇪', primary:'#1C1C1C', secondary:'#FAE042', slogan:'Quality over quantity.' },
    { day:7,  date:'2026-07-04', country:'USA',          flag:'🇺🇸', primary:'#002868', secondary:'#BF0A30', slogan:'Make your mark.' },
    { day:8,  date:'2026-07-05', country:'England',      flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', primary:'#1C1C1C', secondary:'#CF081F', slogan:'Keep it classic.' },
    { day:9,  date:'2026-07-06', country:'Morocco',       flag:'🇲🇦', primary:'#C1272D', secondary:'#006233', slogan:'Defy expectations.' },
    { day:10, date:'2026-07-07', country:'Germany',       flag:'🇩🇪', primary:'#1C1C1C', secondary:'#DD0000', slogan:'Precision matters.' },
    { day:11, date:'2026-07-08', country:'Ivory Coast',   flag:'🇨🇮', primary:'#F77F00', secondary:'#009A44', slogan:'Rise through colour.' },
    { day:12, date:'2026-07-09', country:'Netherlands',  flag:'🇳🇱', primary:'#E77729', secondary:'#FFFFFF', slogan:'Be bold.' },
    { day:13, date:'2026-07-10', country:'Mexico',       flag:'🇲🇽', primary:'#006847', secondary:'#CE1126', slogan:'Show your colors.' },
    { day:14, date:'2026-07-11', country:'Colombia',     flag:'🇨🇴', primary:'#FCD116', secondary:'#003087', slogan:'Express yourself.' },
    { day:15, date:'2026-07-12', country:'Sweden',        flag:'🇸🇪', primary:'#006AA7', secondary:'#FECC00', slogan:'Stay cool. Stay sharp.' },
    { day:16, date:'2026-07-13', country:'Switzerland',  flag:'🇨🇭', primary:'#D52B1E', secondary:'#FFFFFF', slogan:'Bold within.' },
    { day:17, date:'2026-07-14', country:'Cape Verde',    flag:'🇨🇻', primary:'#003893', secondary:'#CF2027', slogan:'Small island. Big heart.' },
    { day:18, date:'2026-07-15', country:'Norway',       flag:'🇳🇴', primary:'#EF2B2D', secondary:'#002868', slogan:'Stand out from the crowd.' },
    { day:19, date:'2026-07-16', country:'Japan',         flag:'🇯🇵', primary:'#BC002D', secondary:'#FFFFFF', slogan:'Thoughtful identities.' },
    { day:20, date:'2026-07-17', country:'Portugal',     flag:'🇵🇹', primary:'#006600', secondary:'#FF0000', slogan:'Show your best self.' },
    { day:21, date:'2026-07-18', country:'France 🆚 England', flag:'🇫🇷🏴󠁧󠁢󠁥󠁮󠁧󠁿', primary:'#002395', secondary:'#CF081F', slogan:'3rd Place Playoff · Kickoff 9:00 PM' },
    { day:22, date:'2026-07-19', country:'Spain 🆚 Argentina', flag:'🏆🇪🇸🇦🇷',  primary:'#AA151B', secondary:'#74ACDF', slogan:'The Final · Kickoff 7:00 PM' },
  ] as const;

  // Cultural pattern generator — matches extension worldcupTheme.js
  const getWCPattern = (team: any): string => {
    if (!team) return '';
    const c1 = team.secondary + '20';
    const c2 = team.primary   + '28';
    const patterns: Record<string, string> = {
      kente:     `repeating-linear-gradient(45deg,${c1} 0,${c1} 5px,transparent 5px,transparent 15px),repeating-linear-gradient(-45deg,${c2} 0,${c2} 3px,transparent 3px,transparent 10px)`,
      carnival:  `repeating-radial-gradient(ellipse 40px 20px at 0% 50%,${c1} 0,${c1} 2px,transparent 2px,transparent 40px),repeating-radial-gradient(ellipse 40px 20px at 50% 0%,${c2} 0,${c2} 2px,transparent 2px,transparent 40px)`,
      fleur:     `repeating-linear-gradient(90deg,${c1} 0,${c1} 1px,transparent 1px,transparent 24px),repeating-linear-gradient(60deg,${c2} 0,${c2} 1px,transparent 1px,transparent 24px),repeating-linear-gradient(-60deg,${c1} 0,${c1} 1px,transparent 1px,transparent 24px)`,
      sun:       `repeating-conic-gradient(${c1} 0deg,${c1} 6deg,transparent 6deg,transparent 12deg),radial-gradient(circle at 50% 50%,${c2} 0%,transparent 45%)`,
      mosaic:    `repeating-linear-gradient(45deg,${c1} 0,${c1} 2px,transparent 2px,transparent 12px),repeating-linear-gradient(-45deg,${c2} 0,${c2} 2px,transparent 2px,transparent 12px)`,
      azulejo:   `repeating-linear-gradient(0deg,${c1} 0,${c1} 1px,transparent 1px,transparent 18px),repeating-linear-gradient(90deg,${c1} 0,${c1} 1px,transparent 1px,transparent 18px),repeating-linear-gradient(45deg,${c2} 0,${c2} 1px,transparent 1px,transparent 18px)`,
      bauhaus:   `repeating-linear-gradient(0deg,${c1} 0,${c1} 3px,transparent 3px,transparent 20px),repeating-linear-gradient(90deg,${c2} 0,${c2} 1px,transparent 1px,transparent 30px)`,
      cross:     `repeating-linear-gradient(0deg,${c1} 0,${c1} 2px,transparent 2px,transparent 20px),repeating-linear-gradient(90deg,${c1} 0,${c1} 2px,transparent 2px,transparent 20px)`,
      tulip:     `repeating-radial-gradient(circle 8px at 50% 50%,${c1} 0,${c1} 2px,transparent 2px,transparent 16px),repeating-linear-gradient(90deg,${c2} 0,${c2} 1px,transparent 1px,transparent 32px)`,
      seigaiha:  `repeating-radial-gradient(circle 14px at 0% 14px,transparent 12px,${c1} 12px,${c1} 14px,transparent 14px),repeating-radial-gradient(circle 14px at 14px 0,transparent 12px,${c2} 12px,${c2} 14px,transparent 14px)`,
      stars:     `repeating-linear-gradient(0deg,${c1} 0,${c1} 2px,transparent 2px,transparent 14px),radial-gradient(circle 2px at 7px 7px,${c2} 100%,transparent 100%)`,
      aztec:     `repeating-linear-gradient(45deg,${c1} 0,${c1} 4px,transparent 4px,transparent 8px),repeating-linear-gradient(-45deg,${c2} 0,${c2} 2px,transparent 2px,transparent 16px)`,
      lace:      `repeating-linear-gradient(45deg,${c1} 0,${c1} 1px,transparent 1px,transparent 8px),repeating-linear-gradient(-45deg,${c1} 0,${c1} 1px,transparent 1px,transparent 8px)`,
      mochila:   `repeating-linear-gradient(60deg,${c1} 0,${c1} 3px,transparent 3px,transparent 10px),repeating-linear-gradient(-60deg,${c2} 0,${c2} 3px,transparent 3px,transparent 10px)`,
      zellige:   `repeating-linear-gradient(30deg,${c1} 0,${c1} 1px,transparent 1px,transparent 10px),repeating-linear-gradient(-30deg,${c2} 0,${c2} 1px,transparent 1px,transparent 10px),repeating-linear-gradient(90deg,${c1} 0,${c1} 1px,transparent 1px,transparent 10px)`,
      boubou:    `repeating-linear-gradient(170deg,${c1} 0,${c1} 3px,transparent 3px,transparent 12px),repeating-linear-gradient(10deg,${c2} 0,${c2} 2px,transparent 2px,transparent 18px)`,
      viking:    `repeating-linear-gradient(60deg,${c1} 0,${c1} 3px,transparent 3px,transparent 12px),repeating-linear-gradient(-60deg,${c1} 0,${c1} 3px,transparent 3px,transparent 12px),repeating-linear-gradient(0deg,${c2} 0,${c2} 1px,transparent 1px,transparent 24px)`,
      aboriginal:`radial-gradient(circle 2px at 8px 8px,${c1} 100%,transparent 100%),radial-gradient(circle 3px at 24px 16px,${c2} 100%,transparent 100%),radial-gradient(circle 2px at 16px 24px,${c1} 100%,transparent 100%)`,
      maple:     `repeating-linear-gradient(45deg,${c1} 0,${c1} 2px,transparent 2px,transparent 16px),repeating-linear-gradient(-45deg,${c1} 0,${c1} 2px,transparent 2px,transparent 16px)`,
      hieroglyph:`repeating-linear-gradient(0deg,${c1} 0,${c1} 1px,transparent 1px,transparent 16px),repeating-linear-gradient(90deg,${c2} 0,${c2} 1px,transparent 1px,transparent 24px),repeating-linear-gradient(45deg,${c1} 0,${c1} 1px,transparent 1px,transparent 24px)`,
      confetti:  `repeating-linear-gradient(45deg,${c1} 0,${c1} 4px,transparent 4px,transparent 10px),repeating-linear-gradient(-45deg,${c2} 0,${c2} 4px,transparent 4px,transparent 10px)`,
      faceoff:   `repeating-linear-gradient(45deg,${c1} 0,${c1} 3px,transparent 3px,transparent 18px),repeating-linear-gradient(-45deg,${c2} 0,${c2} 3px,transparent 3px,transparent 18px)`,
    };
    // Map country to pattern
    const countryPattern: Record<string, string> = {
      'Ghana': 'kente', 'Brazil': 'carnival', 'France': 'fleur',
      'Argentina': 'sun', 'Spain': 'mosaic', 'Portugal': 'azulejo',
      'Germany': 'bauhaus', 'England': 'cross', 'Netherlands': 'tulip',
      'Japan': 'seigaiha', 'USA': 'stars', 'Mexico': 'aztec',
      'Belgium': 'lace', 'Colombia': 'mochila', 'Morocco': 'zellige',
      'Switzerland': 'cross', 'Senegal': 'boubou', 'Norway': 'viking',
      'Australia': 'aboriginal', 'Canada': 'maple', 'Egypt': 'hieroglyph',
      'Paraguay': 'stripes', 'Ivory Coast': 'kente', 'Sweden': 'nordic',
      'Cape Verde': 'waves', 'Algeria': 'arabesque',
      'Final Day': 'confetti',
      'France 🆚 England': 'faceoff',
      'Spain 🆚 Argentina': 'confetti',
    };
    const key = countryPattern[team.country] || 'cross';
    return patterns[key] || '';
  };

  const wcTodayStr = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  })();

  const wcTeam = WC_TEAMS.find((t: any) => t.date === wcTodayStr) || null;
  const wcDaysLeft = wcTeam ? Math.max(0, Math.round((new Date('2026-07-19').getTime() - new Date(wcTodayStr).getTime()) / 86400000)) : 0;
  // Campaign retired — tournament ended 2026-07-19. Forcing this false (rather
  // than deleting WC_TEAMS/the ~500 lines of wcActive-gated JSX below) is the
  // low-risk fix: every banner, confetti effect, and layout spacer already
  // checks `wcActive &&` before rendering, so this one flag turns all of it
  // off cleanly. A follow-up cleanup can delete the dead code once confirmed
  // nothing else references it.
  const wcActive = false;

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

  // World Cup — confetti + crowd sound on FIRST SCROLL (bypasses browser autoplay policy)
  useEffect(() => {
    if (!wcActive || typeof window === 'undefined') return;
    const SESSION_KEY = 'dp_wc_site_celebrated';
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function celebrateOnce() {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, '1');
      window.removeEventListener('scroll', celebrateOnce);
      window.removeEventListener('click', celebrateOnce);

      // Confetti burst
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d')!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colors = [wcTeam!.primary, wcTeam!.secondary, '#FFD700', '#FFFFFF', '#25D366'];
      const particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width, y: -10,
        vx: (Math.random() - 0.5) * 4, vy: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 3, rot: Math.random() * 360, rotV: (Math.random() - 0.5) * 8,
      }));
      let frame = 0; const MAX = 150;
      const tick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p: any) => {
          p.x += p.vx; p.y += p.vy; p.rot += p.rotV; p.vy += 0.06;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, 1 - frame / MAX);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.55);
          ctx.restore();
        });
        frame++;
        if (frame < MAX) requestAnimationFrame(tick); else canvas.remove();
      };
      requestAnimationFrame(tick);

      // 3-layer stadium GOAAAL roar — 3 seconds, loud, same as extension
      const muted = localStorage.getItem('dp_wc_site_muted') === '1';
      if (!muted) {
        try {
          const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
          if (AudioCtx) {
            const actx = new AudioCtx();
            actx.resume().then(() => {
              const dur = 3.0;
              const sr = actx.sampleRate;
              const master = actx.createGain();
              master.connect(actx.destination);
              master.gain.setValueAtTime(0, actx.currentTime);
              master.gain.linearRampToValueAtTime(0.9, actx.currentTime + 0.3);
              master.gain.setValueAtTime(0.9, actx.currentTime + 1.5);
              master.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);

              [[300, 0.8, 0.55], [900, 0.5, 0.45], [2500, 0.3, 0.2]].forEach(([freq, q, vol]) => {
                const buf = actx.createBuffer(1, Math.floor(sr * dur), sr);
                const d = buf.getChannelData(0);
                for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1);
                const src = actx.createBufferSource(); src.buffer = buf;
                const filt = actx.createBiquadFilter();
                filt.type = 'bandpass'; filt.frequency.value = freq as number; filt.Q.value = q as number;
                const g = actx.createGain();
                g.gain.setValueAtTime(0, actx.currentTime);
                g.gain.linearRampToValueAtTime(vol as number, actx.currentTime + 0.15);
                g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + dur);
                src.connect(filt); filt.connect(g); g.connect(master);
                src.start(); src.stop(actx.currentTime + dur);
              });
            });
          }
        } catch(e) {}
      }
    }

    // Attach to BOTH scroll and click — whichever comes first unblocks AudioContext
    window.addEventListener('scroll', celebrateOnce, { once: true });
    window.addEventListener('click', celebrateOnce, { once: true });

    return () => {
      window.removeEventListener('scroll', celebrateOnce);
      window.removeEventListener('click', celebrateOnce);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wcActive]);

  const faqs = [
    { question: t('faq_1_q'), answer: t('faq_1_a') },
    { question: t('faq_2_q'), answer: t('faq_2_a') },
    { question: t('faq_5_q'), answer: t('faq_5_a') },
    { question: t('faq_6_q'), answer: t('faq_6_a') },
    { question: t('faq_7_q'), answer: t('faq_7_a') },
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
            { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "GBP",
              "description": "Unlimited contacts and Scheduled Photos, free forever." },
            { "@type": "Offer", "name": "Pro", "price": "29", "priceCurrency": "GBP",
              "description": "One-time payment. Photo History, bulk assignment, export/import, multi-device sync." }
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script async data-uid="45b1efe5a4" src="https://dualprofile.kit.com/45b1efe5a4/index.js" />
      </Head>

      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <div style={{position:'relative' as const, display:'inline-flex', alignItems:'center'}}>
                <img src="/dualprofile-logo.png" alt="DualProfile Logo" width="32" height="32" />
                {wcActive && (
                  <span style={{
                    position:'absolute' as const,
                    bottom:'-3px', right:'-6px',
                    fontSize:'13px', lineHeight:'1',
                    filter:'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
                    animation:'wcSpinSlow 10s linear infinite',
                    display:'inline-block',
                  }}>⚽</span>
                )}
              </div>
              <span>DualProfile</span>
              {wcActive && wcTeam && (
                <span style={{
                  fontSize:'10px', fontWeight:'700',
                  background:`${wcTeam.primary}`,
                  color: wcTeam.secondary === '#FFFFFF' ? '#fff' : wcTeam.secondary,
                  padding:'2px 7px', borderRadius:'20px',
                  letterSpacing:'0.3px',
                  border:`1px solid ${wcTeam.secondary}55`,
                  whiteSpace:'nowrap' as const,
                  display:'inline-flex', alignItems:'center', gap:'4px',
                }}>
                  {wcTeam.flag} WC 2026
                </span>
              )}
            </div>
            <div className="nav-links">
              <a href="#features">{t('nav_features')}</a>
              <a href="#demo">{t('nav_demo')}</a>
              <a href="#pricing">{t('nav_pricing')}</a>
              <a href="#faq">{t('nav_faq')}</a>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              {/* Desktop lang switcher */}
              <div className="lang-switcher-desktop">
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
              {/* Mobile lang switcher - compact dropdown */}
              <div className="lang-switcher-mobile" style={{position:'relative' as const}}>
                <button onClick={() => setLangMenuOpen((v: boolean) => !v)} style={{
                  background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',
                  borderRadius:'20px',padding:'5px 9px',cursor:'pointer',color:'#d1d5db',
                  fontSize:'11px',fontWeight:'700',fontFamily:'inherit',
                  display:'flex',alignItems:'center',gap:'4px'
                }}>
                  <img src={LANG_OPTIONS.find(l => l.code === lang)?.flag || LANG_OPTIONS[0].flag} alt={lang.toUpperCase()} width="14" height="14" style={{verticalAlign:'middle'}} />
                  <span>{lang.toUpperCase()}</span>
                  <span style={{fontSize:'8px',opacity:0.6}}>&#9660;</span>
                </button>
                {langMenuOpen && (
                  <div style={{
                    position:'absolute' as const,right:0,top:'calc(100% + 6px)',
                    background:'#1a1a1a',border:'1px solid rgba(255,255,255,0.12)',
                    borderRadius:'12px',padding:'6px',zIndex:200,
                    display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'4px',minWidth:'156px',
                    boxShadow:'0 8px 32px rgba(0,0,0,0.5)'
                  }}>
                    {LANG_OPTIONS.map(l => (
                      <button key={l.code} onClick={() => { changeLang(l.code); setLangMenuOpen(false); }} style={{
                        background: lang === l.code ? 'rgba(37,211,102,0.15)' : 'transparent',
                        border: lang === l.code ? '1px solid rgba(37,211,102,0.3)' : '1px solid transparent',
                        borderRadius:'8px',padding:'5px 4px',cursor:'pointer',
                        color: lang === l.code ? '#25D366' : '#9ca3af',
                        fontSize:'11px',fontWeight:'700',fontFamily:'inherit',
                        display:'flex',alignItems:'center',gap:'3px'
                      }}>
                        <img src={l.flag} alt={l.label} width="13" height="13" style={{verticalAlign:'middle'}} />
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              </div>
              <a href="https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc" target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('nav_cta')}
              </a>
            </div>
          </div>
        </nav>

        {/* ── WC Slim Ticker (fixed, sits below navbar at top:64px) ── */}
        {wcActive && wcTeam && (
          <div style={{
            position:'fixed' as const,
            top:'73px', left:0, right:0,
            zIndex:51,
            background:`${getWCPattern(wcTeam)}, linear-gradient(90deg, ${wcTeam.primary}f0, color-mix(in srgb, ${wcTeam.primary} 55%, #0a0a0a))`,
            borderBottom:`1px solid ${wcTeam.secondary}55`,
            padding:'6px 20px',
            display:'flex', alignItems:'center',
            justifyContent:'space-between',
            gap:'8px', overflow:'hidden',
          }}>
            {/* Scrolling background balls */}
            <div style={{position:'absolute' as const, inset:0, overflow:'hidden', pointerEvents:'none' as const}}>
              <span style={{
                position:'absolute' as const, top:'1px', left:0,
                fontSize:'20px', opacity:0.07, whiteSpace:'nowrap' as const,
                animation:'wcBallScroll 22s linear infinite',
              }}>⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽</span>
            </div>
            {/* Left */}
            <div style={{display:'flex', alignItems:'center', gap:'8px', position:'relative' as const, zIndex:1, color:'#fff', fontSize:'11px'}}>
              <span style={{fontWeight:'800', textTransform:'uppercase' as const, letterSpacing:'0.5px', fontSize:'10px'}}>
                ⚽ World Cup 2026
              </span>
              <span style={{opacity:0.35}}>·</span>
              <span style={{opacity:0.8}}>Day {wcTeam.day}/22</span>
              <span style={{opacity:0.35}}>·</span>
              <span style={{fontSize:'13px'}}>{wcTeam.flag}</span>
              <span style={{
                fontWeight:'700',
                color: wcTeam.secondary === '#FFFFFF' ? '#e5e7eb' : wcTeam.secondary,
              }}>{wcTeam.country}</span>
              <span style={{opacity:0.5, fontStyle:'italic' as const, fontSize:'10px'}}>
                "{wcTeam.slogan}"
              </span>
            </div>
            {/* Right */}
            <div style={{display:'flex', alignItems:'center', gap:'8px', position:'relative' as const, zIndex:1, flexShrink:0}}>
              <span style={{
                fontWeight:'700', fontSize:'10px',
                color: wcTeam.secondary === '#FFFFFF' ? '#e5e7eb' : wcTeam.secondary,
                background:'rgba(255,255,255,0.08)',
                padding:'2px 8px', borderRadius:'20px',
                border:`1px solid ${wcTeam.secondary}33`,
              }}>
                {wcTeam.day === 22 ? '🏆 Final!' : `${wcDaysLeft}d left`}
              </span>
              <button
                onClick={() => {
                  const m = localStorage.getItem('dp_wc_site_muted') === '1';
                  localStorage.setItem('dp_wc_site_muted', m ? '0' : '1');
                  setWcMuted(!m);
                }}
                style={{
                  background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
                  borderRadius:'6px', padding:'2px 6px', cursor:'pointer',
                  color:'rgba(255,255,255,0.6)', fontSize:'11px', fontFamily:'inherit',
                }}
              >{wcMuted ? '🔇' : '🔊'}</button>
            </div>
          </div>
        )}

        {/* Push content below fixed navbar + ticker when WC is active */}
        <div style={{height: wcActive ? '118px' : '73px'}} />

        {/* WC Cultural Band — full-width country theme strip */}
        {wcActive && wcTeam && (
          <div style={{
            width:'100%',
            background:`${getWCPattern(wcTeam)}, linear-gradient(135deg, ${wcTeam.primary}cc 0%, color-mix(in srgb, ${wcTeam.primary} 40%, #0a0a0a) 100%)`,
            borderBottom:`2px solid ${wcTeam.secondary}66`,
            padding:'20px 24px',
            display:'flex', alignItems:'center',
            justifyContent:'space-between',
            flexWrap:'wrap' as const,
            gap:'12px',
            position:'relative' as const,
            overflow:'hidden',
          }}>
            {/* Glow overlay */}
            <div style={{
              position:'absolute' as const, inset:0,
              background:`radial-gradient(ellipse 60% 100% at 0% 50%, ${wcTeam.primary}44, transparent)`,
              pointerEvents:'none' as const,
            }}/>
            {/* Left — flag + identity */}
            <div style={{display:'flex', alignItems:'center', gap:'16px', position:'relative' as const, zIndex:1}}>
              <span style={{fontSize:'52px', lineHeight:1, filter:'drop-shadow(0 2px 8px rgba(0,0,0,0.5))'}}>
                {wcTeam.flag}
              </span>
              <div>
                <div style={{fontSize:'11px', fontWeight:'800', textTransform:'uppercase' as const, letterSpacing:'2px', color:`${wcTeam.secondary === '#FFFFFF' ? 'rgba(255,255,255,0.6)' : wcTeam.secondary}`, marginBottom:'2px'}}>
                  ⚽ World Cup 2026 · Day {wcTeam.day}/22
                </div>
                <div style={{fontSize:'26px', fontWeight:'900', color:'#FFFFFF', lineHeight:1.1, textShadow:'0 2px 12px rgba(0,0,0,0.5)'}}>
                  {wcTeam.country}
                </div>
                <div style={{fontSize:'14px', fontStyle:'italic' as const, color:`${wcTeam.secondary === '#FFFFFF' ? 'rgba(255,255,255,0.75)' : wcTeam.secondary}`, marginTop:'4px'}}>
                  "{wcTeam.slogan}"
                </div>
              </div>
            </div>
            {/* Right — days left */}
            <div style={{position:'relative' as const, zIndex:1, textAlign:'right' as const}}>
              <div style={{fontSize:'36px', fontWeight:'900', color: wcTeam.secondary === '#FFFFFF' ? '#FFFFFF' : wcTeam.secondary, lineHeight:1, textShadow:'0 2px 8px rgba(0,0,0,0.4)'}}>
                {wcDaysLeft}
              </div>
              <div style={{fontSize:'10px', textTransform:'uppercase' as const, letterSpacing:'1px', color:'rgba(255,255,255,0.5)', marginTop:'2px'}}>
                days left
              </div>
            </div>
          </div>
        )}

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
            
            {/* Main Headline — 2026-08-30 rewrite (Webb): brutally clear,
                says what the product does before any philosophy. */}
            <h1 className="hero-title" style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '16px'
            }}>
              {t('hero_h1_new')}
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle" style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '20px',
              opacity: '0.9'
            }}>
              {t('hero_sub')}
            </p>

            {/* Activation vs. differentiation — the funnel Webb specified:
                Scheduled Photos (no counterparty install) leads, Private
                Contact Sharing (both sides need DualProfile) is secondary. */}
            <p style={{fontSize: 'clamp(15px, 2vw, 17px)', marginBottom: '8px', opacity: '0.85', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {t('hero_scheduled_note')}
            </p>
            <p className="hero-subtitle-demoted" style={{fontSize: 'clamp(15px, 2vw, 17px)', marginBottom: '32px', opacity: '0.7'}}>
              {t('hero_p2p_note')}
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons" style={{marginBottom: '24px'}}>
              <button 
                className="btn btn-lg btn-primary"
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
            {/* Sub-CTA: trial note */}
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'10px',letterSpacing:'0.3px'}}>
              {t('hero_cta_sub')}
            </p>
            {/* Social proof */}
            <p style={{fontSize:'12px',color:'rgba(255,255,255,0.3)',letterSpacing:'0.5px',textTransform:'uppercase' as const}}>
              {t('hero_social_proof')}
            </p>
          </div>
        </section>

        {/* Visual Demo Strip — 2026-08-30 (Webb): the tangible "8:59am ->
            Switch Now -> both devices update" proof, placed right after
            the hero rather than buried later, since it's the strongest,
            most concrete evidence of the product's core behaviour. */}
        <section className="features" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="container" style={{maxWidth: '820px', margin: '0 auto'}}>
            <div style={{
              display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'center',
              gap: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', padding: '32px 28px'
            }}>
              {/* Before — real photo, not a placeholder */}
              <div style={{textAlign: 'center' as const, minWidth: '140px'}}>
                <div style={{fontSize: '13px', color: '#9ca3af', marginBottom: '8px', fontWeight: '600'}}>{t('visual_demo_time1')}</div>
                <img src="/dp-casual.jpg" alt={t('visual_demo_label1')} style={{width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 10px', display: 'block', border: '1px solid rgba(255,255,255,0.15)'}} />
                <div style={{fontSize: '13px', color: '#d1d5db'}}>{t('visual_demo_label1')}</div>
              </div>
              {/* Arrow / switch */}
              <div style={{textAlign: 'center' as const, minWidth: '120px'}}>
                <div style={{fontSize: '12px', color: '#6b7280', marginBottom: '6px'}}>{t('visual_demo_time2')}</div>
                <div style={{
                  background: '#25D366', color: '#000', fontWeight: '700', fontSize: '13px',
                  padding: '8px 18px', borderRadius: '50px', display: 'inline-block'
                }}>{t('visual_demo_switch')} →</div>
              </div>
              {/* After: both devices, same real photo */}
              <div style={{display: 'flex', gap: '20px'}}>
                <div style={{textAlign: 'center' as const, minWidth: '120px'}}>
                  <div style={{fontSize: '11px', color: '#9ca3af', marginBottom: '6px', textTransform: 'uppercase' as const, letterSpacing: '0.5px'}}>{t('visual_demo_device1')}</div>
                  <img src="/dp-pro-2.jpg" alt={t('visual_demo_label2')} style={{width: '64px', height: '64px', borderRadius: '10px', objectFit: 'cover', margin: '0 auto 10px', display: 'block', border: '1px solid rgba(37,211,102,0.5)'}} />
                  <div style={{fontSize: '13px', color: '#d1d5db'}}>{t('visual_demo_label2')}</div>
                </div>
                <div style={{textAlign: 'center' as const, minWidth: '120px'}}>
                  <div style={{fontSize: '11px', color: '#9ca3af', marginBottom: '6px', textTransform: 'uppercase' as const, letterSpacing: '0.5px'}}>{t('visual_demo_device2')}</div>
                  <img src="/dp-pro-2.jpg" alt={t('visual_demo_label2')} style={{width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 10px', display: 'block', border: '1px solid rgba(37,211,102,0.5)'}} />
                  <div style={{fontSize: '13px', color: '#d1d5db'}}>{t('visual_demo_label2')}</div>
                </div>
              </div>
            </div>
            <p style={{textAlign: 'center' as const, marginTop: '20px', fontSize: 'clamp(18px,3vw,24px)', fontWeight: '700', color: '#fff'}}>{t('visual_demo_title')}</p>
            <p style={{textAlign: 'center' as const, marginTop: '4px', fontSize: '14px', color: '#9ca3af', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto'}}>{t('visual_demo_sub')}</p>
          </div>
        </section>

        {/* Identity Section — 2026-08-30 (Webb): rebuilt as an asymmetric
            photo+list layout instead of a third centred icon-card grid in a
            row, and swapped the generic icon-in-a-circle for the real
            professional photo (dp-pro-2.jpg, no employer branding). */}
        <section id="identity" className="features" style={{paddingTop: '20px', paddingBottom: '20px'}}>
          <div className="container">
            <div className="identity-grid">
              <img src="/dp-pro-2.jpg" alt={t('identity_title')} style={{width: '100%', maxWidth: '240px', margin: '0 auto', borderRadius: '16px', objectFit: 'cover', aspectRatio: '3/4', border: '1px solid rgba(255,255,255,0.1)', display: 'block'}} />
              <div>
                <h2 className="section-title" style={{textAlign: 'left' as const, marginBottom: '6px'}}>{t('identity_title')}</h2>
                <p className="section-subtitle" style={{textAlign: 'left' as const, marginBottom: '24px'}}>{t('identity_sub')}</p>
                <div style={{display: 'flex', flexDirection: 'column' as const, gap: '18px'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0, marginTop: '2px'}}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    <div>
                      <div style={{fontWeight: '700', color: '#fff', fontSize: '0.95rem'}}>{t('identity_boss')}</div>
                      <div style={{color: '#9ca3af', fontSize: '0.9rem'}}>{t('identity_boss_sees')}</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0, marginTop: '2px'}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <div>
                      <div style={{fontWeight: '700', color: '#fff', fontSize: '0.95rem'}}>{t('identity_friends')}</div>
                      <div style={{color: '#9ca3af', fontSize: '0.9rem'}}>{t('identity_friends_sees')}</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0, marginTop: '2px'}}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <div>
                      <div style={{fontWeight: '700', color: '#fff', fontSize: '0.95rem'}}>{t('identity_family')}</div>
                      <div style={{color: '#9ca3af', fontSize: '0.9rem'}}>{t('identity_family_sees')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Hook — distribution primitive, first scroll breakpoint */}
        <section className="share-hook" style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{maxWidth: '720px', margin: '0 auto'}}>
            <p style={{
              fontSize: 'clamp(20px, 3.2vw, 28px)',
              fontWeight: 600,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.92)',
              marginBottom: '14px',
            }}>
              {t('share_hook_1')}
            </p>
            <p style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#25D366',
              marginBottom: '14px',
              letterSpacing: '-0.5px',
            }}>
              {t('share_hook_2')}
            </p>
            <p style={{
              fontSize: 'clamp(16px, 2.4vw, 20px)',
              color: 'rgba(255,255,255,0.55)',
              fontStyle: 'italic',
            }}>
              {t('share_hook_3')}
            </p>
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
              fontSize: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{flexShrink: 0}}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
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
            {/* Preview Mode promotion — solves cold-start, visible before deep scroll */}
            <div style={{marginTop: '32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px 28px', textAlign: 'center' as const}}>
              <p style={{margin: 0, color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                {t('preview_callout')}
              </p>
            </div>
            <div style={{marginTop: '24px', background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: '16px', padding: '28px 32px', display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'space-between', gap: '16px'}}>
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
              <p className="section-subtitle">{t('features_sub')}</p>
            </div>

            {/* 4 Pro features */}
            <div className="features-grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
              {/* Photo History - flagship */}
              <div className="feature-card glass-card animate-on-scroll" style={{border:'1px solid rgba(37,211,102,0.3)',position:'relative' as const}}>
                <div style={{position:'absolute' as const,top:'12px',right:'12px',background:'#25D366',color:'#000',fontSize:'10px',fontWeight:'800',padding:'2px 8px',borderRadius:'10px',letterSpacing:'0.5px'}}>{t('feat_pro_badge')}</div>
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <h3 className="feature-title"><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'18px',height:'18px',marginRight:'6px',verticalAlign:'middle'}}><svg viewBox="0 0 24 24" fill="#25D366" width="16" height="16"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg></span>{t('feat1_title')}</h3>
                <p className="feature-description">{t('feat1_desc')}</p>
              </div>
              <div className="feature-card glass-card animate-on-scroll" style={{position:'relative' as const}}>
                <div style={{position:'absolute' as const,top:'12px',right:'12px',background:'rgba(37,211,102,0.15)',color:'#25D366',fontSize:'10px',fontWeight:'800',padding:'2px 8px',borderRadius:'10px',letterSpacing:'0.5px'}}>{t('free_label')}</div>
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="feature-title">{t('feat2_title')}</h3>
                <p className="feature-description">{t('feat2_desc')}</p>
              </div>
              <div className="feature-card glass-card animate-on-scroll" style={{position:'relative' as const}}>
                <div style={{position:'absolute' as const,top:'12px',right:'12px',background:'rgba(37,211,102,0.15)',color:'#25D366',fontSize:'10px',fontWeight:'800',padding:'2px 8px',borderRadius:'10px',letterSpacing:'0.5px'}}>{t('feat_pro_badge')}</div>
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <h3 className="feature-title">{t('feat3_title')}</h3>
                <p className="feature-description">{t('feat3_desc')}</p>
              </div>
              <div className="feature-card glass-card animate-on-scroll" style={{position:'relative' as const}}>
                <div style={{position:'absolute' as const,top:'12px',right:'12px',background:'rgba(37,211,102,0.15)',color:'#25D366',fontSize:'10px',fontWeight:'800',padding:'2px 8px',borderRadius:'10px',letterSpacing:'0.5px'}}>{t('feat_pro_badge')}</div>
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <h3 className="feature-title">{t('feat4_title')}</h3>
                <p className="feature-description">{t('feat4_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Is This For Me — 2026-08-30 (Webb): eliminate confusion between
            Scheduled Photos (acquisition, no counterparty install) and
            Private Contact Sharing (differentiation, both sides need
            DualProfile) BEFORE pricing, not after a purchase. */}
        <section id="is-this-for-me" className="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('is_for_me_title')}</h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '820px', margin: '0 auto'}}>
              <div className="glass-card" style={{padding: '1.75rem', border: '1px solid rgba(37,211,102,0.3)'}}>
                <p style={{fontWeight: '700', color: '#fff', marginBottom: '14px', fontSize: '1.05rem'}}>{t('is_for_me_q1')}</p>
                {[t('is_for_me_q1_point1'), t('is_for_me_q1_point2'), t('is_for_me_q1_point3'), t('is_for_me_q1_point4')].map(p => (
                  <div key={p} style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#d1d5db', fontSize: '0.95rem'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" style={{flexShrink: 0}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {p}
                  </div>
                ))}
              </div>
              <div className="glass-card" style={{padding: '1.75rem'}}>
                <p style={{fontWeight: '700', color: '#fff', marginBottom: '14px', fontSize: '1.05rem'}}>{t('is_for_me_q2')}</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#d1d5db', fontSize: '0.95rem'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" style={{flexShrink: 0}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {t('is_for_me_q2_point1')}
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#d1d5db', fontSize: '0.95rem'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{flexShrink: 0}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  {t('is_for_me_q2_point2')}
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#d1d5db', fontSize: '0.95rem'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{flexShrink: 0}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  {t('is_for_me_q2_point3')}
                </div>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '760px',
              margin: '0 auto'
            }}>
              {/* Free */}
              <div className="glass-card" style={{padding: '2.25rem', textAlign: 'center' as const}}>
                <h3 style={{fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('free_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.95rem', marginBottom: '1rem'}}>{t('free_sub')}</p>
                <div style={{background:'rgba(37,211,102,0.08)',border:'1px solid rgba(37,211,102,0.2)',borderRadius:'8px',padding:'8px 12px',marginBottom:'1rem',fontSize:'12px',color:'#25D366',fontWeight:'600'}}>
                  {t('free_trial_note')}
                </div>
                <div style={{fontSize: '3rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£0</div>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.75rem'}}>{t('free_forever')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' as const}}>
                  {/* Scheduled Photos is the headline free feature: it needs no
                      counterparty install, so it works for 100% of installers
                      on day one. */}
                  <li style={{padding: '0.6rem 0', borderBottom: '1px solid rgba(37,211,102,0.15)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37,211,102,0.06)', borderRadius: '6px', paddingLeft: '8px', marginBottom: '4px'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    <span style={{fontWeight: '700', color: '#25D366'}}>{t('feat_scheduled')}</span>
                  </li>
                  {[t('feat_contacts_free'), t('feat_preview'), t('feat_p2p'), t('feat_chrome')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  {t('btn_start_trial')}
                </button>
              </div>

              {/* Pro — the only paid tier. One-time, no subscription. */}
              <div className="glass-card glow-primary" style={{
                padding: '2.25rem', textAlign: 'center' as const,
                border: '1px solid rgba(37,211,102,0.4)', position: 'relative' as const
              }}>
                <div style={{
                  position: 'absolute' as const, top: 0, right: 0,
                  background: '#25D366', color: '#000',
                  fontSize: '0.75rem', fontWeight: '700',
                  padding: '4px 14px', borderBottomLeftRadius: '8px', borderTopRightRadius: '12px'
                }}>{t('badge_popular')}</div>
                <h3 style={{fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem'}}>{t('pro_label')}</h3>
                <p style={{color: '#9ca3af', fontSize: '0.95rem', marginBottom: '1.5rem'}}>{t('pro_sub')}</p>
                <div style={{fontSize: '3rem', fontWeight: '800', color: '#25D366', marginBottom: '0.1rem'}}>£29</div>
                <div style={{fontSize: '0.78rem', color: '#6b7280', marginBottom: '0.1rem'}}>{t('usd_approx')} $13 USD</div>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.75rem'}}>{t('pro_once')}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left' as const}}>
                  <li style={{padding: '0.6rem 0', borderBottom: '1px solid rgba(37,211,102,0.15)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37,211,102,0.06)', borderRadius: '6px', paddingLeft: '8px', marginBottom: '4px'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" style={{flexShrink: 0}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    <span style={{fontWeight: '700', color: '#25D366'}}>{t('feat_everything_free')}</span>
                  </li>
                  {[t('feat_photo_history'), t('feat_trial'), t('feat_export'), t('feat_sync'), t('feat_priority'), t('feat_nofee')].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                  <li style={{padding: '0.5rem 0', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' as const}}>
                    <span style={{color: '#6b7280'}}>+</span> {t('feat_future')}
                  </li>
                </ul>
                <button className="btn btn-primary" style={{width: '100%'}}
                  onClick={() => window.open('https://wadualpic.lemonsqueezy.com/checkout/buy/4f5df750-a085-44a6-8cdd-690b92bd80b1', '_blank')}>
                  {t('btn_get_pro')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Where — 2026-08-30 (Webb): replaces the repeated
            "install free" callout that sat here. This is a repeated-CTA cut,
            not a content cut: the space now answers the exact question a
            reader has right after seeing pricing — what does Pro actually
            change, and where. */}
        <section style={{padding:'60px 20px',textAlign:'center' as const}}>
          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(22px,4vw,32px)',fontWeight:'700',color:'#fff',marginBottom:'32px'}}>{t('what_happens_where_title')}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', textAlign: 'left' as const}}>
              {[
                [t('what_contacts_see_label'), t('what_contacts_see_val')],
                [t('what_phone_label'), t('what_phone_val')],
                [t('what_web_label'), t('what_web_val')],
                [t('what_requires_install_label'), t('what_requires_install_val')],
              ].map(([label, val]) => (
                <div key={label} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px 20px'}}>
                  <div style={{color: '#25D366', fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px'}}>{label}</div>
                  <div style={{color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5'}}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section style={{padding:'60px 20px',textAlign:'center' as const}}>
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:'700',color:'#fff',marginBottom:'32px'}}>{t('social_title')}</h2>
            {/* Reddit quote */}
            <div style={{background:'rgba(255,69,0,0.06)',border:'1px solid rgba(255,69,0,0.2)',borderLeft:'4px solid #FF4500',borderRadius:'12px',padding:'24px 28px',marginBottom:'32px',textAlign:'left' as const}}>
              <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
                <span style={{fontSize:'13px',color:'#FF4500',fontWeight:'700',letterSpacing:'0.5px'}}>r/DigitalPrivacy</span>
                <span style={{fontSize:'12px',color:'rgba(255,255,255,0.25)'}}>·</span>
                <span style={{fontSize:'12px',color:'rgba(255,255,255,0.3)'}}>Jun 1, 2026</span>
              </div>
              <p style={{fontSize:'clamp(15px,2vw,18px)',color:'#e5e7eb',fontStyle:'italic',lineHeight:'1.6',marginBottom:'12px'}}>
                &ldquo;{t('social_quote')}&rdquo;
              </p>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.35)'}}>{t('social_attr')}</div>
            </div>
            {/* Stats */}
            <div style={{display:'flex',justifyContent:'center',gap:'32px',flexWrap:'wrap' as const}}>
              {[t('social_stat1'), t('social_stat2'), t('social_stat3')].map((stat, i) => (
                <div key={i} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'12px 20px',fontSize:'13px',color:'rgba(255,255,255,0.6)',fontWeight:'600'}}>
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security — 2026-08-30 (Webb): elevated from a small line under
            the demo video into its own prominent section. Placed right
            before FAQ, matching Webb's proposed page order (pricing ->
            security -> FAQ) since data-handling is exactly the kind of
            objection that blocks a purchase decision. */}
        <section id="security" style={{padding: '60px 20px', textAlign: 'center' as const}}>
          <div style={{maxWidth: '720px', margin: '0 auto'}}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.5" style={{margin: '0 auto 12px', display: 'block'}}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <h2 style={{fontSize: 'clamp(24px,4vw,34px)', fontWeight: '800', color: '#fff', marginBottom: '24px'}}>{t('security_title')}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', textAlign: 'left' as const}}>
              {[t('security_point1'), t('security_point2'), t('security_point3')].map(p => (
                <div key={p} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px 20px', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" style={{flexShrink: 0, marginTop: '2px'}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {p}
                </div>
              ))}
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
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

        /* Navbar language switcher — responsive */
        .lang-switcher-desktop {
          display: flex;
          gap: 3px;
          flex-wrap: wrap;
          align-items: center;
        }
        .lang-switcher-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .lang-switcher-desktop { display: none !important; }
          .lang-switcher-mobile { display: block !important; }
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

        .identity-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: center;
          max-width: 860px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .identity-grid {
            grid-template-columns: minmax(180px, 240px) 1fr;
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

        /* ── World Cup 2026 ──────────────────────────────────────────── */
        @keyframes wcBallScroll {
          from { transform: translateX(-200px); }
          to   { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes wcSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes wcPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.1); }
        }
        @keyframes wcFadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
