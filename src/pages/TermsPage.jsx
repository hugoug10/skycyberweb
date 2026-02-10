import React, { useEffect } from 'react';

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>
            <div className="space-y-6 text-gray-300">
                <p>Última actualización: {new Date().toLocaleDateString()}</p>
                <p>
                    Bienvenido a CyberSkyWeb. Al acceder a nuestro sitio web, usted acepta estar sujeto a estos términos y condiciones.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Uso del Sitio</h2>
                <p>
                    Usted se compromete a utilizar nuestro sitio web solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de cualquier otra persona.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad de CyberSkyWeb y está protegido por las leyes de propiedad intelectual.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Limitación de Responsabilidad</h2>
                <p>
                    CyberSkyWeb no será responsable de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja del uso o la imposibilidad de uso de este sitio.
                </p>
            </div>
        </div>
    );
};

export default TermsPage;
