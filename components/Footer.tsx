import React from 'react';
import { icons } from '../constants';
import Container from './ui/Container';

const Footer: React.FC = () => (
  <footer className="mt-10 border-t border-black/5 bg-slate-900 py-14 text-slate-200 dark:border-white/10">
    <Container className="grid gap-10 md:grid-cols-2">
      <div>
        <h4 className="text-xl font-bold"><span className="text-amber-400">P</span>erspective <span className="text-amber-400">M</span>arketing</h4>
        <p className="mt-2 max-w-md text-sm text-slate-300">Desatamos talentos en quienes desean crecer, mientras ayudamos a quienes más nos necesitan.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://jobtoday.com/cl/company/captacion-de-fondos-ong-f2f-perspective-marketing--JPMYDa" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">Job Today Ofertas</a>
        </div>
      </div>
      <div>
        <h5 className="text-sm font-semibold text-amber-300">Contacto</h5>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li className="flex items-start gap-2">{icons.mapPin}<span>C. del Príncipe de Vergara, 109 · 28002 Madrid</span></li>
          <li className="flex items-start gap-2">
            {icons.mail}
            <a href="mailto:administracion@perspectivemarketing.es" className="underline decoration-amber-400/60 underline-offset-4 transition-colors hover:text-white">administracion@perspectivemarketing.es</a>
          </li>
        </ul>
        <div className="mt-8 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Perspective Marketing S.L. – Todos los derechos reservados.</p>
          <p className="mt-4 max-w-xl">
            PERSPECTIVE MARKETING SL. | CIF: B88280219 | Objeto Social: Relaciones públicas y comunicación (CNAE 7021) | Inscrita en el Registro Mercantil de Madrid.
          </p>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;