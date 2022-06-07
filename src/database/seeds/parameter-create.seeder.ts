import { Factory, Seeder } from "typeorm-seeding";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "../../modules/users/users.repository";
import { Connection, getManager } from "typeorm";
import * as bcrypt from "bcrypt";
import { ParametersRepository } from "../../modules/parameters/parameter.repository";
import { Parameter } from "../../modules/parameters/entity/parameters.entity";

export class ParameterCreateSeeder implements Seeder {
  constructor(
    @InjectRepository(ParametersRepository)
    private parametersRepository: ParametersRepository,
  ) {}

  public async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('TRUNCATE parameter');

    const parameters = [
      // Origen del Nombre de la Cueva
      {
        param_id: 'cueva_origen_nombre',
        param_name: 'Origen del Nombre de la Cueva',
        param_order: 0,
        parentParameterParamId: 'cueva_origen_nombre',
      },
      {
        param_id: 'cartografia_existente',
        param_name: 'Cartografía existente',
        param_order: 1,
        parentParameterParamId: 'cueva_origen_nombre',
      },
      {
        param_id: 'lugarenios',
        param_name: 'Lugareños',
        param_order: 2,
        parentParameterParamId: 'cueva_origen_nombre',
      },
      {
        param_id: 'otros_informantes',
        param_name: 'Otros informantes',
        param_order: 3,
        parentParameterParamId: 'cueva_origen_nombre',
      },

      // Tipo de Cavidad
      {
        param_id: 'tipo_cavidad',
        param_name: 'Tipo de Cavidad',
        param_order: 0,
        parentParameterParamId: 'tipo_cavidad',
      },
      {
        param_id: 'abrigo_rocoso',
        param_name: 'Abrigo rocoso',
        param_order: 1,
        parentParameterParamId: 'tipo_cavidad',
      },
      {
        param_id: 'cueva',
        param_name: 'Cueva',
        param_order: 2,
        parentParameterParamId: 'tipo_cavidad',
      },

      // Tipo de Relieve
      {
        param_id: 'tipo_relieve',
        param_name: 'Tipo de Relieve',
        param_order: 0,
        parentParameterParamId: 'tipo_relieve',
      },
      {
        param_id: 'vertical',
        param_name: 'Vertical',
        param_order: 1,
        parentParameterParamId: 'tipo_relieve',
      },
      {
        param_id: 'horizontal',
        param_name: 'Horizontal',
        param_order: 2,
        parentParameterParamId: 'tipo_relieve',
      },
      {
        param_id: 'inclinado',
        param_name: 'Inclinado',
        param_order: 3,
        parentParameterParamId: 'tipo_relieve',
      },
      {
        param_id: 'otro_tipo_relieve',
        param_name: 'Otro',
        param_order: 4,
        parentParameterParamId: 'tipo_relieve',
      },

      // Tipo de Vegetación
      {
        param_id: 'tipo_vegetacion',
        param_name: 'Tipo de Vegetación',
        param_order: 0,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'boscosa',
        param_name: 'Boscosa',
        param_order: 1,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'pasto',
        param_name: 'Pasto',
        param_order: 2,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'xerofitica',
        param_name: 'Xerofitica',
        param_order: 3,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'bosque_seco',
        param_name: 'Bosque Seco',
        param_order: 4,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'humedal',
        param_name: 'Humedal',
        param_order: 5,
        parentParameterParamId: 'tipo_vegetacion',
      },
      {
        param_id: 'otro_tipo_vegetacion',
        param_name: 'Otro',
        param_order: 6,
        parentParameterParamId: 'tipo_vegetacion',
      },

      // Estado de la Cavidad
      {
        param_id: 'estado_cavidad',
        param_name: 'Estado de la Cavidad',
        param_order: 0,
        parentParameterParamId: 'estado_cavidad',
      },
      {
        param_id: 'estado_cavidad_natural',
        param_name: 'Natural',
        param_order: 1,
        parentParameterParamId: 'estado_cavidad',
      },
      {
        param_id: 'alterada',
        param_name: 'Alterada',
        param_order: 2,
        parentParameterParamId: 'estado_cavidad',
      },
      {
        param_id: 'escrita',
        param_name: 'Escrita',
        param_order: 3,
        parentParameterParamId: 'estado_cavidad',
      },
      {
        param_id: 'basura',
        param_name: 'Basura',
        param_order: 4,
        parentParameterParamId: 'estado_cavidad',
      },
      {
        param_id: 'espeleotemas_destruidos',
        param_name: 'Espeleotemas Destruidos',
        param_order: 5,
        parentParameterParamId: 'estado_cavidad',
      },

      // Topografia Realizada
      {
        param_id: 'topografia_realizada',
        param_name: 'Topografía Realizada',
        param_order: 0,
        parentParameterParamId: 'topografia_realizada',
      },
      {
        param_id: 'topografia_completa',
        param_name: 'Completa',
        param_order: 1,
        parentParameterParamId: 'topografia_realizada',
      },
      {
        param_id: 'topografia_parcial',
        param_name: 'Parcial',
        param_order: 2,
        parentParameterParamId: 'topografia_realizada',
      },

      // Cartografía Realizada
      {
        param_id: 'cartografia_realizada',
        param_name: 'Cartografía Realizada',
        param_order: 0,
        parentParameterParamId: 'cartografia_realizada',
      },
      {
        param_id: 'cartografia_completa',
        param_name: 'Completa',
        param_order: 1,
        parentParameterParamId: 'cartografia_realizada',
      },
      {
        param_id: 'cartografia_parcial',
        param_name: 'Parcial',
        param_order: 2,
        parentParameterParamId: 'cartografia_realizada',
      },

      // Método de Topografía
      {
        param_id: 'metodo_topografia',
        param_name: 'Método de Topografía',
        param_order: 0,
        parentParameterParamId: 'metodo_topografia',
      },
      {
        param_id: 'topografia_lineal',
        param_name: 'Lineal',
        param_order: 1,
        parentParameterParamId: 'metodo_topografia',
      },
      {
        param_id: 'topografia_poligonal_cerrada',
        param_name: 'Poligona Cerrada',
        param_order: 2,
        parentParameterParamId: 'metodo_topografia',
      },
      {
        param_id: 'topografia_radial',
        param_name: 'Radial',
        param_order: 3,
        parentParameterParamId: 'metodo_topografia',
      },
      {
        param_id: 'topografia_combinacion',
        param_name: 'Combinacion (lineal y radial)',
        param_order: 4,
        parentParameterParamId: 'metodo_topografia',
      },

      // Relieve de Entrada
      {
        param_id: 'relieve_entrada',
        param_name: 'Relieve de Entrada',
        param_order: 0,
        parentParameterParamId: 'relieve_entrada',
      },
      {
        param_id: 'vertical',
        param_name: 'Vertical',
        param_order: 1,
        parentParameterParamId: 'relieve_entrada',
      },
      {
        param_id: 'horizontal',
        param_name: 'Horizontal',
        param_order: 2,
        parentParameterParamId: 'relieve_entrada',
      },
      {
        param_id: 'inclinado',
        param_name: 'Inclinado',
        param_order: 3,
        parentParameterParamId: 'relieve_entrada',
      },
      {
        param_id: 'otro_relieve_entrada',
        param_name: 'Otro',
        param_order: 4,
        parentParameterParamId: 'relieve_entrada',
      },

      // Coordenadas tomadas por
      {
        param_id: 'metodo_medicion_coordenadas',
        param_name: 'Método de medición de coordenadas',
        param_order: 0,
        parentParameterParamId: 'metodo_medicion_coordenadas',
      },
      {
        param_id: 'mapa',
        param_name: 'Mapa',
        param_order: 1,
        parentParameterParamId: 'metodo_medicion_coordenadas',
      },
      {
        param_id: 'triangulacion',
        param_name: 'Triangulación',
        param_order: 2,
        parentParameterParamId: 'metodo_medicion_coordenadas',
      },
      {
        param_id: 'gps',
        param_name: 'GPS',
        param_order: 3,
        parentParameterParamId: 'metodo_medicion_coordenadas',
      },

      // Altura sobre nivel del mar
      {
        param_id: 'metodo_medicion_altura_nivel_mar',
        param_name: 'Método de medición de altura sobre el nivel del mar',
        param_order: 0,
        parentParameterParamId: 'metodo_medicion_altura_nivel_mar',
      },
      {
        param_id: 'mapa_topografico',
        param_name: 'Mapa Topográfico (líneas de contorno)',
        param_order: 1,
        parentParameterParamId: 'metodo_medicion_altura_nivel_mar',
      },
      {
        param_id: 'triangulacion',
        param_name: 'Triangulación',
        param_order: 2,
        parentParameterParamId: 'metodo_medicion_altura_nivel_mar',
      },
      {
        param_id: 'gps',
        param_name: 'GPS',
        param_order: 3,
        parentParameterParamId: 'metodo_medicion_altura_nivel_mar',
      },

      // Grados orientacion
      {
        param_id: 'grados_orientacion',
        param_name: 'Grados Orientacion',
        param_order: 0,
        parentParameterParamId: 'grados_orientacion',
      },
      {
        param_id: 'norte',
        param_name: ' Norte',
        param_order: 1,
        parentParameterParamId: 'grados_orientacion',
      },
      {
        param_id: 'este',
        param_name: 'Este',
        param_order: 2,
        parentParameterParamId: 'grados_orientacion',
      },
      {
        param_id: 'sur',
        param_name: 'Sur',
        param_order: 3,
        parentParameterParamId: 'grados_orientacion',
      },
      {
        param_id: 'oeste',
        param_name: 'Oeste',
        param_order: 4,
        parentParameterParamId: 'grados_orientacion',
      },
      {
        param_id: 'otro_grado_orientacion',
        param_name: 'Otro',
        param_order: 5,
        parentParameterParamId: 'grados_orientacion',
      },

      // Tipo de agua
      {
        param_id: 'tipo_agua',
        param_name: 'Tipo de agua',
        param_order: 0,
        parentParameterParamId: 'tipo_agua',
      },
      {
        param_id: 'agua_dulce',
        param_name: ' Dulce',
        param_order: 1,
        parentParameterParamId: 'tipo_agua',
      },
      {
        param_id: 'agua_salobre',
        param_name: 'Salobre',
        param_order: 2,
        parentParameterParamId: 'tipo_agua',
      },
      {
        param_id: 'agua_salada',
        param_name: 'Salada',
        param_order: 3,
        parentParameterParamId: 'tipo_agua',
      },

      // Corriente de agua
      {
        param_id: 'corriente_agua',
        param_name: 'Corriente de agua',
        param_order: 0,
        parentParameterParamId: 'corriente_agua',
      },
      {
        param_id: 'corriente_agua_permanente',
        param_name: 'Permanente',
        param_order: 1,
        parentParameterParamId: 'corriente_agua',
      },
      {
        param_id: 'corriente_agua_ocasional',
        param_name: 'Ocasional',
        param_order: 2,
        parentParameterParamId: 'corriente_agua',
      },

      // Tipos de formaciones
      {
        param_id: 'tipos_formaciones',
        param_name: 'Tipos de formaciones',
        param_order: 0,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'estalactitas',
        param_name: 'Estalactitas',
        param_order: 1,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'estalagmitas',
        param_name: 'Estalagmitas',
        param_order: 2,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'columnas',
        param_name: 'Columnas',
        param_order: 3,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'helictitas',
        param_name: 'Helictitas',
        param_order: 4,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'paletas',
        param_name: 'Paletas',
        param_order: 5,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'piscinas',
        param_name: 'Piscinas',
        param_order: 6,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'cortinas',
        param_name: 'Cortinas',
        param_order: 7,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'coladas',
        param_name: 'Coladas (flowstone)',
        param_order: 8,
        parentParameterParamId: 'tipos_formaciones',
      },
      {
        param_id: 'otros_espeleotemas',
        param_name: 'Otros',
        param_order: 9,
        parentParameterParamId: 'tipos_formaciones',
      },

      // Tipos de depósitos
      {
        param_id: 'tipos_depositos',
        param_name: 'Tipos de Depósitos',
        param_order: 0,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'colapsos',
        param_name: 'Colapsos',
        param_order: 1,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'gravas',
        param_name: 'Gravas',
        param_order: 2,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'arenas',
        param_name: 'Arenas',
        param_order: 3,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'arcilla',
        param_name: 'Arcilla',
        param_order: 4,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'cantos_rodados',
        param_name: 'Cantos rodados',
        param_order: 5,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'guano_seco',
        param_name: 'Guano seco',
        param_order: 6,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'guano_humedo',
        param_name: 'Guano húmedo',
        param_order: 7,
        parentParameterParamId: 'tipos_depositos',
      },
      {
        param_id: 'otros_tipos_depositos',
        param_name: 'Otros',
        param_order: 8,
        parentParameterParamId: 'tipos_depositos',
      },

      // Fauna adicional
      {
        param_id: 'fauna_adicional',
        param_name: 'Fauna adicional',
        param_order: 0,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'cucaracha',
        param_name: 'Cucaracha',
        param_order: 1,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'grillo',
        param_name: 'Grillo',
        param_order: 2,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'arania',
        param_name: 'Araña',
        param_order: 3,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'cangrejo',
        param_name: 'Cangrejo',
        param_order: 4,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'escorpion',
        param_name: 'Escorpión',
        param_order: 5,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'camaron',
        param_name: 'Camarón',
        param_order: 6,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'serpiente',
        param_name: 'Serpiente',
        param_order: 7,
        parentParameterParamId: 'fauna_adicional',
      },
      {
        param_id: 'otra_fauna_adicional',
        param_name: 'Otros',
        param_order: 8,
        parentParameterParamId: 'fauna_adicional',
      },

      // Lugar de mesura
      {
        param_id: 'lugar_mesura',
        param_name: 'Lugar de mesura',
        param_order: 0,
        parentParameterParamId: 'lugar_mesura',
      },
      {
        param_id: 'aire',
        param_name: 'Aire',
        param_order: 1,
        parentParameterParamId: 'lugar_mesura',
      },
      {
        param_id: 'agua',
        param_name: 'Agua',
        param_order: 2,
        parentParameterParamId: 'lugar_mesura',
      },
      {
        param_id: 'suelo',
        param_name: 'Suelo',
        param_order: 3,
        parentParameterParamId: 'lugar_mesura',
      },
      {
        param_id: 'roca',
        param_name: 'Roca',
        param_order: 4,
        parentParameterParamId: 'lugar_mesura',
      },

      // Excavaciones arqueológicas
      {
        param_id: 'excavaciones_arqueologicas',
        param_name: 'Excavaciones arqueológicas',
        param_order: 0,
        parentParameterParamId: 'excavaciones_arqueologicas',
      },
      {
        param_id: 'ceramicas',
        param_name: 'Cerámicas',
        param_order: 1,
        parentParameterParamId: 'excavaciones_arqueologicas',
      },
      {
        param_id: 'otros_excavaciones_arqueologicas',
        param_name: 'Otros',
        param_order: 2,
        parentParameterParamId: 'excavaciones_arqueologicas',
      },

      // Otros hallazgos
      {
        param_id: 'otros_hallazgos',
        param_name: 'Otros hallazgos',
        param_order: 0,
        parentParameterParamId: 'otros_hallazgos',
      },
      {
        param_id: 'pictografias',
        param_name: 'Pictografías',
        param_order: 1,
        parentParameterParamId: 'otros_hallazgos',
      },
      {
        param_id: 'petroglifos',
        param_name: 'Petroglifos',
        param_order: 2,
        parentParameterParamId: 'otros_hallazgos',
      },
      {
        param_id: 'huesos',
        param_name: 'Huesos',
        param_order: 3,
        parentParameterParamId: 'otros_hallazgos',
      },

      // Posibles actividades
      {
        param_id: 'posibles_actividades_hallazgos',
        param_name: 'Posibles actividades que han realizad en la cavidad',
        param_order: 0,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },
      {
        param_id: 'folklorico',
        param_name: 'Folklórico',
        param_order: 1,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },
      {
        param_id: 'ritos',
        param_name: 'Ritos',
        param_order: 2,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },
      {
        param_id: 'caceria',
        param_name: 'Cacería',
        param_order: 3,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },
      {
        param_id: 'albergue',
        param_name: 'Albergue',
        param_order: 4,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },
      {
        param_id: 'se_desconoce',
        param_name: 'Se desconoce',
        param_order: 5,
        parentParameterParamId: 'posibles_actividades_hallazgos',
      },

      // Presencia de fósiles
      {
        param_id: 'presencia_fosiles',
        param_name: 'Presencia de Fósiles',
        param_order: 0,
        parentParameterParamId: 'presencia_fosiles',
      },
      {
        param_id: 'roca_estructural',
        param_name: 'Roca estructural',
        param_order: 1,
        parentParameterParamId: 'presencia_fosiles',
      },
      {
        param_id: 'techo',
        param_name: 'Techo',
        param_order: 2,
        parentParameterParamId: 'presencia_fosiles',
      },
      {
        param_id: 'pared',
        param_name: 'Pared',
        param_order: 3,
        parentParameterParamId: 'presencia_fosiles',
      },
      {
        param_id: 'piso',
        param_name: 'Piso',
        param_order: 4,
        parentParameterParamId: 'presencia_fosiles',
      },
      {
        param_id: 'sedimento',
        param_name: 'Sedimento',
        param_order: 5,
        parentParameterParamId: 'presencia_fosiles',
      },
    ];


    for (const index in parameters) {
      await factory(Parameter)().create({
        param_id: parameters[index].param_id,
        param_order: parameters[index].param_order,
        parentParameter: parameters[index].parentParameterParamId,
      });
    }

    //return Promise.resolve(undefined);
  }

}