import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Smartphone } from 'lucide-react';

interface SecurityTip {
  icon: React.ReactNode;
  title: string;
  description: string;
  tips: string[];
}

function App() {
  const securityTips: SecurityTip[] = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Gestión de Contraseñas",
      description: "Protege tus cuentas académicas con contraseñas seguras",
      tips: [
        "Usa contraseñas únicas para cada cuenta universitaria.",
        "Mínimo 12 caracteres con combinación de letras, números y símbolos.",
        "Utiliza un gestor de contraseñas confiable.",
        "Activa la autenticación de doble factor (2FA) siempre que sea posible."
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Phishing y Correos Sospechosos.",
      description: "Identifica y evita intentos de estafa por correo electrónico",
      tips: [
        "Verifica siempre el remitente antes de hacer clic en enlaces.",
        "Nunca compartas credenciales por correo electrónico.",
        "Reporta correos sospechosos al departamento de TyO.",
        "Desconfía de ofertas o premios inesperados."
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Protección de Datos Personales",
      description: "Mantén tu información académica y personal segura",
      tips: [
        "No compartas tu número de estudiante públicamente.",
        "Configura la privacidad en redes sociales académicas.",
        "Ten cuidado con información sensible en trabajos grupales.",
        "No compartas datos de tu cuenta universitaria."
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Uso Seguro de Redes Sociales",
      description: "Mantén tu reputación académica intacta online",
      tips: [
        "Piensa antes de publicar contenido relacionado con la universidad.",
        "Configura perfiles privados para información personal.",
        "No aceptes solicitudes de amistad de desconocidos.",
        "Evita publicar horarios de clases o ubicaciones en tiempo real."
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Software y Actualizaciones",
      description: "Mantén tus dispositivos protegidos y actualizados",
      tips: [
        "Instala actualizaciones del sistema operativo regularmente.",
        "Usa software antivirus en todos tus dispositivos.",
        "Descarga software solo de fuentes oficiales.",
        "Configura actualizaciones automáticas cuando sea posible."
      ]
    }
    ,
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Uso Seguro de Pen Drives",
      description: "Evita riesgos al utilizar dispositivos USB en la universidad",
      tips: [
        "No conectes pen drives desconocidos o de origen dudoso.",
        "Analiza los dispositivos USB con un antivirus antes de abrir archivos.",
        "Evita guardar información sensible sin cifrado en pen drives.",
        "Expulsa siempre el pen drive de forma segura para prevenir daños."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guía de Seguridad Digital Universitaria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prácticas esenciales para proteger tu información académica, personal y 
              mantenerte seguro en el entorno universitario digital.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {securityTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">
                    {tip.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tip.description}
                </p>
                
                <ul className="space-y-3">
                  {tip.tips.map((tipItem, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {tipItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas Ayuda Adicional?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Si tienes dudas sobre seguridad digital o has sido víctima de algún incidente,
            contacta inmediatamente al departamento de Tecnologías y Operaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-white">
              <strong>📧 Email:</strong> tyo@uap.edu.ar
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            2025 UAP - 4to año de Ingeniería en Sistemas.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Mantente seguro, mantente informado
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;