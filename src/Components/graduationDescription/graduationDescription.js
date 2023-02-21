import { Descriptions } from 'antd';


const GraduationDescription = ({ data }) => {
  console.log(data)
  return (
    <div>

      <Descriptions title="Características">
        <Descriptions.Item label="Linea:"> {data.brand} </Descriptions.Item>
        <Descriptions.Item label="Formato de venta:">Unidad</Descriptions.Item>
        <Descriptions.Item label="Stock:"> {data.stock}</Descriptions.Item>
        <Descriptions.Item label="Tipo de entrega">Domicilio</Descriptions.Item>
        <Descriptions.Item label="Descuento: ">0%</Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default GraduationDescription;