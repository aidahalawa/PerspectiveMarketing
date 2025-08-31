import React from 'react';
import { icons } from '../../constants';
import AnimateOnScroll from './AnimateOnScroll';

const TrustBadge: React.FC<{
    icon: string;
    value: string;
    label: string;
    delay: number;
}> = ({ icon, value, label, delay }) => (
    <AnimateOnScroll delay={delay}>
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="text-amber-600">{icons[icon]}</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
        </div>
    </AnimateOnScroll>
);


const TrustBadges: React.FC = () => (
    <div className="mt-12 w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TrustBadge 
                icon="star"
                value="4.8/5 Estrellas"
                label="Valoración de Empleados"
                delay={0}
            />
            <TrustBadge 
                icon="award"
                value="Certificación GPTW"
                label="Great Place to Work"
                delay={100}
            />
            <TrustBadge 
                icon="chart"
                value="+50 Puestos en 2024"
                label="Empresa en Crecimiento"
                delay={200}
            />
        </div>
    </div>
);

export default TrustBadges;