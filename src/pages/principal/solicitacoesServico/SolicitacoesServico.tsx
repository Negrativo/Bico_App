import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './StyleSolicitacoesServico';
import { getSolicitacoesByUsuario } from '../../../service/solicitacaoService/solicitacaoService';
import { useUser } from '../../../context/AuthContext';
import { ServicoDoUsuarioDTO } from '../../../dtos/ServicoDoUsuarioDTO';
import SolicitacaoServico from '../../../components/solicitacaoServico/SolicitacaoServicoComponent';

export default function () {
  const [dadosLista, setDados] = useState<ServicoDoUsuarioDTO[]>();
  const [mounted, setMounted] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      if (!!user?.id) {
        const solicitacoes = await getSolicitacoesByUsuario(user.id);
        if (!!solicitacoes) {
          setDados(solicitacoes);
        }
      }
    };

    if (mounted) {
      fetchSolicitacoes();
    }

    return () => {
      setMounted(false);
    };
  }, [user, mounted]);

  return (
    <View style={styles.container}>
      <Text>Solicitações de serviços</Text>
      <View>
        {(!!dadosLista?.length && dadosLista?.length > 0)
          ?
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dadosLista}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <SolicitacaoServico
                usuarioSolicitante={item.usuarioSolicitante}
                servico={item.servico}
                diaSelecionado={item.diaSelecionado}
                horarioSolicitado={item.horarioSolicitado}
                observacao={item.observacao}
                endereco={item.endereco}
                onPress={() => { }}
              />
            )}
          />
          :
          <View>
            <Text style={styles.Text}>Nenhuma solicitação no momento</Text>
          </View>
        }
      </View>
    </View>
  );
}