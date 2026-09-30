import { withBase } from 'vitepress'
import { ref } from 'vue'
import { fetchJson } from '../utils/fetchJson'

/**
 * Composable que permite consultar datos desde los endpoints de la `api` definida,
 * con comportamiento reactivo.
 *
 * @param {string} endPoint Path del enPoint con el dominio que se ha definido en utiles.js
 *
 * @returns Propiedades | Funciones
 */
export function useDatosApi(endPoint) {
  /**
   * Objeto|Array reactivo que contendrá los datos consultados desde cada endPoint
   */
  const datos = ref(null)
  const pending = ref(false)
  const error = ref(null)

  /**
   * Función asincrona que consulta los datos con los parámetros actualizados
   */
  const consultarDatos = async () => {
    pending.value = true
    error.value = null

    try {
      const url = withBase(endPoint)
      console.warn('url', url)

      datos.value = await fetchJson(url)
      console.warn('datos Cargados')

      return datos.value
    } catch (err) {
      error.value = err
      console.error('No se pudo cargar el JSON:', err)

      return null
    } finally {
      pending.value = false
    }
  }

  return {
    datos,
    pending,
    error,
    consultarDatos,
  }
}
