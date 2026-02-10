import React, { useEffect } from 'react';

const PrivacyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
            <div className="space-y-6 text-gray-300">
                <p>Última actualización: {new Date().toLocaleDateString()}</p>
                <p>
                    En CyberSkyWeb, valoramos su privacidad por encima de todo. Queremos ser completamente transparentes: <strong>no recopilamos, almacenamos ni procesamos ningún tipo de dato personal</strong> a través de este sitio web.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Recopilación Limitada</h2>
                <p>
                    Este sitio web no utiliza cookies de rastreo ni bases de datos automáticas. <strong>La única información que recibimos es la que usted nos facilita voluntariamente al escribirnos por correo electrónico</strong> para solicitar nuestros servicios.
                </p>
                <p className="mt-4">
                    Estos datos (como su dirección de correo y mensaje) se almacenan únicamente en nuestro servidor de correo seguro con el único fin de responder a su consulta y gestionar la relación comercial si decide contratar nuestros servicios. Jamás compartimos esta información con terceros.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Seguridad Total</h2>
                <p>
                    Al no almacenar datos, eliminamos el riesgo de filtraciones. Su navegación es privada y segura.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Contacto</h2>
                <p>
                    Si tiene alguna duda, puede escribirnos directamente a <a href="mailto:hugoug10.fly@gmail.com" className="text-neon-cyan hover:underline">hugoug10.fly@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPage;
