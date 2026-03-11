export default function Home() {
  return (
    <main id="main-content" className="page-main">
      <section id="kancelaria" className="hero-shell" aria-labelledby="hero-title">
        <div className="sr-only">
          <h1 id="hero-title">NMK Kancelaria</h1>
          <p>
            Zielona bryła pełni rolę hero section i stanowi tło dla stałej,
            przyklejonej nawigacji.
          </p>
        </div>
      </section>

      <section id="oferta" className="content-grid">
        <article id="prawo-rodzinne" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Prawo Rodzinne</h2>
          <p>Strategia procesowa i wsparcie w sprawach o wysokiej wrażliwości.</p>
        </article>

        <article id="prawo-karne" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Prawo Karne</h2>
          <p>Reprezentacja od zatrzymania po etap sądowy z jasną komunikacją.</p>
        </article>

        <article id="prawo-spadkowe" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Prawo Spadkowe</h2>
          <p>Uporządkowanie sukcesji, zachowku i ryzyk majątkowych.</p>
        </article>

        <article id="obsluga-biznesu" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Obsługa Biznesu</h2>
          <p>Stałe doradztwo prawne dla firm wymagających szybkiej reakcji.</p>
        </article>

        <article id="prawo-nieruchomosci" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Prawo Nieruchomości</h2>
          <p>Transakcje, negocjacje i spory z naciskiem na bezpieczeństwo.</p>
        </article>

        <article id="mediacje" className="content-card">
          <p className="eyebrow">Oferta</p>
          <h2>Mediacje & Negocjacje</h2>
          <p>Rozwiązania polubowne tam, gdzie liczy się czas i reputacja.</p>
        </article>
      </section>

      <section id="aktualnosci" className="feature-strip">
        <div>
          <p className="eyebrow">Aktualności</p>
          <h2>Eksperckie komentarze, analizy i sprawy, które realnie zmieniają decyzje.</h2>
        </div>
        <p>
          Sekcja została uproszczona, żeby utrzymać nacisk wizualny na zielonym
          hero i precyzyjnej nawigacji, ale copy jest już bliżej tonu marki.
        </p>
      </section>

      <section id="kontakt" className="page-placeholder">
        <p className="eyebrow">Kontakt</p>
        <h2>Kontakt bez zbędnych warstw.</h2>
        <p>
          Główny CTA telefonu, tekstowy e-mail oraz sociale są już osadzone w
          headerze, więc sekcja kontaktowa może pozostać lekka.
        </p>
      </section>
    </main>
  );
}
