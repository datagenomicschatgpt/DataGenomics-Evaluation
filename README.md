# DataGenomics · Evaluation Release

Sitio público de descarga e instrucciones para DataGenomics Evaluation 0.2.3.

- **Landing:** https://datagenomicschatgpt.github.io/DataGenomics-Evaluation/
- **Instalador Ubuntu 22.04.5 x86_64:** [descargar .tar.gz](https://github.com/datagenomicschatgpt/DataGenomics-Evaluation/releases/download/v0.2.3-evaluation/DataGenomics-Evaluation-0.2.3-ubuntu22.04-x86_64.tar.gz)
- **Integridad:** [SHA256SUMS](https://github.com/datagenomicschatgpt/DataGenomics-Evaluation/releases/download/v0.2.3-evaluation/SHA256SUMS)
- **Instrucciones:** [instalación y lanzamiento](https://datagenomicschatgpt.github.io/DataGenomics-Evaluation/docs/instalacion.html).

Este repositorio contiene exclusivamente la landing y documentación pública.
El instalador se publica como asset de una GitHub Release; no se almacena en el
historial Git. Los repositorios de desarrollo y ciencia conservan su visibilidad
privada. No se incluyen datos de pacientes, curaciones, credenciales ni bases
científicas restringidas.

La aplicación se ejecuta en el servidor de la instalación. Los componentes
externos se configuran con los permisos del responsable. Descargar el instalador
no concede acceso a repositorios privados. Los módulos empaquetados de
PyInstaller son inspeccionables; el ejecutable no cifra el código.

Alcance: instalación y evaluación técnica. El perfil operativo para un TRIO real
sigue pendiente de conexión y admisión específica. No se declara validación
clínica. [Alcance](https://datagenomicschatgpt.github.io/DataGenomics-Evaluation/docs/alcance.html).

## Desarrollo de esta página

Sitio estático sin dependencias, analítica ni secretos. Abrir `index.html` o usar
un servidor estático local. GitHub Pages publica la raíz de `main`.
Las versiones y enlaces se mantienen en `release.json` y en el HTML; al cambiar
la versión, actualizar ambos. Las licencias de la aplicación y de sus
bibliotecas se conservan en `licenses/` dentro del paquete.


El enlace de acceso al servidor se configura en `access.json`, campo `server_origin`, con el origen HTTPS corporativo autorizado (sin rutas ni credenciales). Mientras sea `null`, la sección Acceso permanece explícitamente pendiente. La página pública nunca solicita ni verifica contraseñas. No cambiar el dominio de Pages hasta disponer de autorización y DNS corporativo.

Acceso provisional: modo `loopback-historical-demo` en el puerto 19674. La landing no enlaza directamente `/cases.html`, porque esa ruta requiere una cookie y respondería `unauthorized`. El operador crea el túnel, ejecuta `prefix/bin/dg url` en BIO25 y abre el enlace privado resultante. La landing no autentica, no comparte tokens y no publica un puerto LAN. Se conserva pendiente el endpoint corporativo HTTPS y la candidata Argon2id no está desplegada.
