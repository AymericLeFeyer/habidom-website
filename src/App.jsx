// Components
import React, { useState, useRef, useEffect } from "react";

// Styles
import "./style/bootstrap.min.css";
import "./style/App.css";

// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";

// Components
import Appbar from "./components/Appbar";
import Services from "./components/Services";
import About from "./components/About";

import { BrowserRouter } from "react-router-dom";

function App() {
  // Check if page is scrolled
  const [hasScrolled, _setHasScrolled] = useState(false);
  const scrolledRef = useRef(hasScrolled);
  const [displayAbout, setDisplayAbout] = useState(false);

  const setHasScrolled = (data) => {
    scrolledRef.current = data;
    _setHasScrolled(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
    // eslint-disable-next-line
  }, []);

  var previous = 0;

  // Calculate the new margin top
  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 0,
      shrinkOff = 65;

    if (distanceY >= previous) {
      // Scroll down
      if (distanceY > shrinkOn) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    } else {
      // Scroll up
      if (distanceY > shrinkOff) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    previous = distanceY;
    // console.log(distanceY)
  }
  return (
    <BrowserRouter>
    <div id="top"></div>
      <div className="App">
        <Appbar
          scroll={scrolledRef.current}
          setDisplayAbout={() => setDisplayAbout(!displayAbout)}
        />
        <div
          className={`App-content${
            scrolledRef.current ? " App-content-small" : ""
          }`}
        >
          <div id="about"><About scroll={scrolledRef.current} display={displayAbout} /></div>
          <div id="services">
          <Services /></div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
          accusamus reiciendis sit eum ratione vel expedita qui debitis maxime,
          laudantium laboriosam nostrum, voluptatum soluta. Dolorem eius optio
          dignissimos laboriosam. Eius, numquam vitae, nisi cupiditate veniam
          quas distinctio soluta tempore delectus provident, cum fugit quo amet
          assumenda tempora. Distinctio aspernatur consectetur temporibus
          deleniti mollitia. Distinctio alias provident quam nostrum natus?
          Delectus porro, atque, consequuntur quasi corporis numquam dolore
          earum dignissimos, voluptate labore minus. Quisquam, debitis! Nihil
          rerum officia inventore ab consequatur, labore recusandae voluptatum
          distinctio quia! Repellat dolorum odio neque? Incidunt, assumenda
          porro! Totam facere vero obcaecati quisquam, corrupti quae reiciendis
          aspernatur non minus temporibus nisi maiores consequatur dolorem,
          corporis impedit illum velit? Quas dolor, voluptates laboriosam illo
          at in? Laboriosam, cum aliquam? Qui unde enim dolor totam eius
          suscipit dolore vel explicabo expedita dolorum dolorem neque incidunt
          harum a temporibus, rem optio commodi voluptatum aliquid ratione
          repudiandae? Amet, earum? Rerum obcaecati accusantium eum, vero
          deleniti molestias velit laudantium cupiditate magni. Esse soluta
          reiciendis nam veniam maxime natus facere harum, asperiores dolor
          quam. Fugit nihil labore molestiae aut veritatis? Esse? Minus, fugit,
          ex dolorum voluptas laudantium ipsam consectetur repudiandae nihil
          culpa dicta illum officiis eaque perspiciatis expedita quaerat numquam
          esse quod eos dolor nobis nesciunt veniam, velit sed. Dolore,
          eligendi? Ea aliquam tempore ut corporis pariatur iste possimus,
          necessitatibus quidem sapiente iusto. Facilis assumenda tempora nam
          laborum repudiandae quas. Libero, inventore placeat a qui aliquid
          similique quo illum dolores porro? Magni repellat sapiente quibusdam,
          qui suscipit architecto nobis beatae tempore laudantium dignissimos
          sint nesciunt consequatur enim alias, rerum autem voluptatibus
          voluptates quos ad maiores officiis impedit dolor at? Repellat,
          laudantium! Excepturi debitis neque tempora doloribus quis doloremque
          quibusdam placeat quia corrupti ipsa! Maiores odio quaerat fugit optio
          cupiditate, alias quis ex libero delectus minima repudiandae sed,
          exercitationem numquam id aut. Ipsam eius perferendis aperiam labore
          necessitatibus ullam porro quod, repudiandae qui molestiae veniam ab
          tenetur beatae est deleniti voluptatibus velit reiciendis itaque quasi
          ipsum maiores? In atque quaerat delectus non! Minus eos veniam, unde
          ducimus commodi quia molestiae voluptates tempora qui inventore aut?
          Obcaecati quaerat cum suscipit veritatis est eos saepe beatae fugiat
          enim neque quia, vero iure commodi dolorem. Quibusdam aperiam magnam
          qui quod magni praesentium, blanditiis distinctio possimus neque,
          illum consequatur accusamus inventore cumque deserunt unde quas
          repudiandae, fuga voluptate voluptas expedita maiores officiis
          necessitatibus. Totam, modi quos. Ratione nulla consequuntur odio
          exercitationem neque quo hic est recusandae ab nam unde dicta rerum
          alias totam harum deserunt ipsam, iste libero debitis nesciunt omnis
          vitae, nisi perferendis. Mollitia, magnam! Impedit laudantium est
          iusto veniam rerum quasi, nam magni ipsum nulla temporibus asperiores
          fugiat reiciendis nisi dolorem vel alias. Porro laboriosam officia
          itaque blanditiis consectetur labore accusamus illo molestiae libero.
          Placeat fugit dolorem dolor officia eveniet inventore commodi
          necessitatibus expedita, esse sapiente alias assumenda iusto, animi
          minima, illo itaque modi! Facere enim hic quod necessitatibus ullam
          omnis, in veritatis nihil? Autem dolorum labore reprehenderit
          aspernatur, magni in. Dolorum, repellendus velit quisquam qui
          voluptatibus earum magni nostrum, nihil laudantium vel eveniet! Maxime
          delectus nulla corrupti fuga cumque quo aperiam dignissimos itaque?
          Atque quisquam esse voluptatum blanditiis illum omnis maiores
          inventore ipsum aperiam, quidem repudiandae. Ea assumenda possimus
          doloremque repudiandae, nostrum autem porro illum ipsum expedita
          officiis quo, corporis, facilis cumque eum. Quidem corporis, deserunt
          laudantium delectus doloremque enim ut earum sed animi recusandae?
          Soluta quos, nihil, perspiciatis porro necessitatibus nemo facilis
          aliquid ducimus, cupiditate commodi nostrum. Pariatur nemo labore
          eligendi odio. Nostrum neque minima officiis tempora quos impedit eos
          rem, cum veniam odio pariatur dolore fugit saepe, natus animi
          laboriosam debitis, quam sint. Commodi quis beatae, ut voluptates
          officiis perspiciatis corporis. Delectus reprehenderit omnis eveniet
          atque? Dolorem placeat dolor pariatur rem in cum eaque. Natus tempore
          animi cum, cupiditate omnis, mollitia dolorum culpa ullam, magnam fuga
          nam et! Commodi, adipisci blanditiis? Voluptate quasi totam fugiat
          eius qui rem assumenda repellendus laborum nostrum eveniet dicta,
          voluptatum magni at doloremque velit ipsa atque officiis quis ad
          accusantium incidunt voluptatem quod unde ipsam. Eum? Totam iure, in
          quos vero ipsa, mollitia maxime labore voluptates cupiditate, error
          temporibus quas. Rem, voluptas accusamus impedit dolore molestias, hic
          numquam harum unde voluptate obcaecati provident fugit at sit. Magni,
          totam facilis. Quidem earum praesentium dolor quaerat necessitatibus
          voluptate accusamus quod. Provident beatae molestias non tempore
          corrupti reprehenderit, doloribus atque, quas temporibus quod delectus
          mollitia, animi nesciunt nostrum obcaecati! Error sapiente laborum
          sint adipisci maxime quam rem tempora ratione, autem, cupiditate
          necessitatibus repellendus maiores excepturi vitae ipsum vero commodi
          ducimus quasi saepe. Nulla maxime enim repellendus unde, facilis
          cupiditate. Dolores at voluptate soluta quidem sapiente eligendi, modi
          officiis nihil reprehenderit ducimus! Facere quibusdam ad, deleniti
          repellat consectetur laboriosam eaque quos vel inventore ratione
          excepturi aut voluptatum. Labore, nemo ducimus? Et consequuntur nam
          sed exercitationem vel similique iure enim aliquid, illum, eum
          aliquam? Ullam dolorum fugiat quas ex. Illum ducimus eum facere enim
          libero nihil nemo sit eveniet fuga commodi. Consequatur accusamus
          exercitationem magni earum. Cumque rerum cum voluptate, laborum sed
          sapiente suscipit eum impedit consequatur sit, reprehenderit id natus,
          nulla illum rem assumenda? Ad delectus beatae explicabo possimus
          mollitia. Distinctio quibusdam ratione nam earum iure? Quisquam,
          impedit error non, quaerat ducimus nam obcaecati vel laborum hic
          magnam fuga amet voluptatum ipsa aperiam fugit illum ex nemo voluptas
          est quasi? Tempore ipsa, amet corporis facere vel eos odio odit
          maiores minus harum nulla quod, cum quisquam at excepturi assumenda
          laudantium iure placeat natus aliquid itaque et aspernatur? Velit,
          facere eligendi! Molestias voluptas earum dicta deserunt itaque amet,
          voluptatibus ipsa id, quisquam tempora necessitatibus quidem
          reiciendis quo reprehenderit tempore repellendus voluptatem architecto
          consequuntur! Aliquid debitis dolorem tempore expedita, nemo
          reiciendis ducimus. Quas iusto, laborum id a reprehenderit expedita
          blanditiis sequi vel? Maxime itaque facilis aliquam mollitia?
          Veritatis adipisci natus nesciunt ipsam magni nobis quidem dolor.
          Rerum ut quod commodi ea cumque? Ipsum, labore? Repellendus,
          recusandae ex iste tempore nostrum optio in architecto dicta inventore
          nobis quos! Magnam ipsa vel at, pariatur, omnis voluptatem, quisquam
          exercitationem quidem odit ab minima iste eveniet? Error iure
          temporibus cumque debitis, corporis laudantium aspernatur rerum
          explicabo quo accusantium mollitia quidem voluptate? Tenetur, animi!
          Itaque reprehenderit sint odio aut nemo fugit, dolor, placeat quod
          laborum blanditiis ipsa. Placeat, nulla dolorum commodi culpa autem
          rerum dicta esse corporis necessitatibus, ipsum accusamus eaque dolor
          earum consequuntur excepturi debitis! Voluptatem dolor omnis quam
          assumenda mollitia, similique dicta quod dolorum? Ex? Quas totam vero
          recusandae accusamus architecto nulla unde, vitae eos, obcaecati
          minus, commodi culpa laudantium. Quis in, accusantium minima eius
          veritatis voluptas, dolores rerum nostrum tenetur, error pariatur
          perferendis maiores! Vel, qui assumenda? Modi cum officia totam qui
          animi quia aut facere, nesciunt asperiores incidunt rem fuga voluptas
          assumenda dignissimos mollitia! Sequi deleniti accusantium aut
          corrupti cumque impedit, quod quasi? Ullam nobis distinctio, vero
          dolorem illum impedit ipsa ipsum at dolorum laborum voluptatem libero
          quam minus vel doloremque, architecto, est quae error accusantium?
          Autem, ipsum! Doloremque blanditiis laudantium in perspiciatis.
          Exercitationem nulla deleniti veritatis itaque accusamus ullam,
          officia, et natus esse adipisci placeat iure reprehenderit reiciendis,
          quisquam nobis laboriosam ipsam cupiditate veniam eligendi animi illum
          commodi aut. Culpa, quae nesciunt. Dolorem necessitatibus, earum
          recusandae, natus fugit possimus ut distinctio ipsam nemo eaque, unde
          sequi quam pariatur cupiditate hic modi omnis aliquid doloremque iure.
          Est non aspernatur qui repellendus, praesentium dignissimos!
          Dignissimos omnis atque soluta earum impedit odio cum nostrum vero
          voluptatum? Optio corporis vel consectetur eligendi unde sequi sit
          distinctio accusamus eveniet veritatis. Ea autem neque dicta rem,
          maxime expedita. Tempora dolore cum dolores, eius pariatur, nostrum a
          perspiciatis, illum ab magni vitae. Expedita eaque corporis et
          asperiores commodi magnam qui, labore, aliquid, nemo similique
          consectetur quos veritatis error. Reprehenderit! Cumque, aut, itaque
          voluptates asperiores sapiente totam distinctio culpa quos nemo beatae
          quae molestias ratione magnam nisi? Delectus mollitia exercitationem
          perspiciatis maxime atque consequatur praesentium accusantium. Veniam
          amet nemo itaque. Veniam provident magni voluptatibus laboriosam est
          labore fugiat explicabo, unde nam necessitatibus expedita voluptas
          ipsam pariatur vitae porro! Repudiandae eligendi labore nisi. Quae
          repellendus dolore impedit est ab consequuntur optio. Nam libero esse
          magni dolorum eos praesentium perferendis quod dignissimos eius!
          Quaerat cum ab nisi ducimus perferendis harum, temporibus deserunt
          quia debitis enim eaque! Nobis corrupti vel harum modi ipsam! At error
          magni suscipit, ipsa, aliquam, doloribus accusantium officiis
          temporibus laboriosam quasi commodi! Odit saepe laboriosam animi.
          Nobis nulla at aliquid neque, dolorum dicta aliquam. Aliquam beatae
          quis qui eius. Cum non veniam porro alias, quod corrupti cumque fugit,
          labore vel molestias laboriosam facere culpa eius natus unde dolorem
          vitae fuga nihil saepe facilis, deserunt qui. Eligendi obcaecati
          adipisci voluptas! Quas, explicabo! Facilis, enim! Suscipit, nam ut
          doloremque quasi possimus provident exercitationem voluptas
          voluptatum, vitae dignissimos repellendus ipsam pariatur perferendis
          debitis sit dicta dolorum voluptates tenetur placeat cumque.
          Cupiditate, ab! Harum soluta esse vero repudiandae iusto animi unde
          ipsam reprehenderit saepe accusantium temporibus reiciendis assumenda
          recusandae at, provident amet inventore incidunt, similique sed rerum
          ullam qui excepturi quod! Omnis, sequi? Ut, nobis mollitia. Omnis
          numquam iste mollitia adipisci similique quisquam voluptate iusto
          aperiam modi, voluptatibus ea! Doloremque, neque omnis aut
          necessitatibus eos ut aspernatur adipisci accusantium, earum molestias
          ullam soluta. Ab magni enim nemo accusantium eaque, fugiat architecto
          ipsa perferendis deleniti molestiae! Quidem architecto id beatae
          officiis. Natus reiciendis aliquid sint itaque ut odio laudantium,
          tempora, assumenda quia dicta ullam. Id corrupti similique tenetur
          neque laboriosam deserunt impedit expedita magni ipsam voluptas
          repellat officia maiores dolorum inventore, laudantium dicta dolore
          pariatur voluptatem fugiat tempora obcaecati. Sequi molestias eligendi
          vitae illum. Obcaecati ratione id reiciendis ea corporis quas tempora
          aliquam aliquid eos cumque quam error suscipit natus vitae est
          deserunt necessitatibus, repudiandae quos provident esse possimus
          dolore voluptas, iste a? Aut. Natus omnis nam explicabo aspernatur
          veritatis neque suscipit, quidem iure at similique architecto
          temporibus, sapiente aliquam aliquid vero! Beatae temporibus quae
          facilis sunt eaque earum, pariatur alias eius! Excepturi, repellendus.
          Numquam ipsa blanditiis iste neque perferendis eum corporis nostrum.
          Voluptatem ratione non veritatis, quibusdam at iure molestiae eius
          corporis voluptate sapiente consequatur perferendis aut sint molestias
          dolore quod a illum. Tempora temporibus ut esse dicta et culpa
          reprehenderit omnis exercitationem, laudantium aliquid rem! Nesciunt,
          temporibus esse voluptatum dolores velit consequatur! Ipsum odit,
          architecto inventore accusantium soluta dolor provident! Eligendi,
          porro? Natus quibusdam ipsum molestiae est reiciendis quam minima
          dicta voluptatum aut harum, possimus beatae ut rerum in facilis maxime
          distinctio eveniet consectetur animi laudantium! Quasi ducimus
          possimus laborum molestias itaque. Ipsum, dolorum consequatur dicta
          quia, voluptates quas est deserunt debitis enim, vel consequuntur et
          voluptatum obcaecati illum non ullam molestiae laboriosam quae ex
          omnis eum mollitia. Ipsa, itaque minima. Commodi. Labore quaerat, enim
          corporis molestias tempora excepturi ducimus suscipit. Delectus
          consequuntur laudantium, tenetur culpa veritatis quis impedit saepe
          voluptas minima doloremque asperiores eligendi reiciendis labore
          incidunt id voluptate quod assumenda. Sed consequuntur itaque impedit
          pariatur maiores animi hic, perferendis, suscipit architecto
          consequatur cumque molestiae a quasi iste nisi facere cum error
          accusantium accusamus nulla assumenda sit labore doloremque
          repellendus. Vel! Maiores deleniti debitis, dicta iusto minus
          recusandae beatae ab cum ipsa quis quas sapiente laboriosam architecto
          corrupti sed aspernatur ipsam velit. Maiores perspiciatis incidunt
          illum eligendi. Laborum voluptatum velit accusantium. Obcaecati rerum
          quas excepturi earum laboriosam reiciendis, officia, repudiandae odio
          quo consectetur inventore facere minus ea? Id officia inventore magni
          earum, asperiores delectus quam veritatis tempore quidem, quasi ipsum
          veniam. Deleniti explicabo minima aperiam, sapiente asperiores
          dignissimos. Voluptates officia eum harum itaque ullam ab vero
          explicabo porro sequi soluta nisi, molestias, blanditiis autem aliquid
          et obcaecati laudantium eligendi exercitationem error! Pariatur, ipsa
          veniam hic corporis aut numquam. Sit quasi, harum beatae tempore ex
          voluptatem atque velit cupiditate sunt ratione molestias aut officiis
          nulla. Accusamus, reprehenderit non. Eos quae ab eius. A suscipit modi
          dolor eaque pariatur ad nemo optio, tempore porro soluta ea similique
          voluptatum velit vero impedit nihil ducimus aliquam officia reiciendis
          vitae quod ut veritatis molestias. Blanditiis, quaerat. Modi non ipsam
          velit, voluptates maiores earum minima voluptate voluptatibus eius
          fugiat tenetur, quos nesciunt eum hic quaerat quae! Atque repellendus,
          est sint ut corrupti veritatis hic quibusdam nobis. Officiis. Nisi,
          dignissimos aspernatur. Iure architecto facere sint consequuntur vel
          animi nam nemo dolor, sed vero nulla laborum error obcaecati eligendi.
          Repudiandae quam consectetur sunt id esse aperiam hic asperiores rem.
          Perferendis odit quae dolores maiores ex, nesciunt, voluptatem odio
          vel in autem error assumenda alias vero ipsa quod vitae nisi eaque
          tempore fugit explicabo fuga? Voluptas autem tempora dignissimos
          dolorem. Dignissimos id optio, est iusto temporibus accusamus ullam
          alias blanditiis tempore aliquam. Fugit similique incidunt facilis ex,
          explicabo laborum porro laudantium perspiciatis cumque voluptatum,
          maxime suscipit placeat error repellendus optio. Nihil praesentium
          voluptatibus perferendis repellat aperiam sequi aut odio minus, vero
          neque dolorum aliquid, illum ut quaerat sunt cumque recusandae velit
          sed explicabo corporis saepe ipsam atque et in. Repudiandae! Magnam
          recusandae laborum repellat sequi sapiente exercitationem assumenda
          mollitia explicabo cum est laudantium nam ex magni perferendis harum
          eos aperiam dolorem praesentium corporis, ducimus adipisci? Dolores
          ratione eos culpa at. Iure ipsum non eum dignissimos facere minima
          modi? Quam inventore magnam quae veritatis dolorem eaque, placeat,
          mollitia dicta repellat possimus sapiente. Ratione corporis quis
          assumenda expedita veritatis sunt ex nesciunt. Mollitia, nihil minus
          quod sit rerum neque dolore aut repellendus quidem enim. Corrupti
          accusantium quod beatae doloremque non fugit nisi animi eveniet
          quibusdam facere repellat corporis maxime, vero at quas! Dolor
          doloremque at veniam natus error ipsa debitis porro consequuntur a
          quod quas distinctio laboriosam neque, quia consequatur, suscipit,
          ipsum numquam tempora sit obcaecati ad voluptatum? Distinctio fuga
          enim reprehenderit. Similique debitis earum eligendi explicabo
          repellendus non. Quae quibusdam, eveniet doloribus modi laudantium
          magni autem ad beatae alias obcaecati officiis maiores dolorem illum
          natus ipsam unde incidunt qui. Exercitationem, eius? Numquam doloribus
          consequuntur voluptate repellendus cupiditate explicabo accusantium
          pariatur repudiandae minus totam culpa ducimus, dignissimos officia
          nesciunt modi neque repellat. Facilis quia laudantium rerum similique?
          Odit cumque ducimus nostrum ipsam. Iure accusantium modi eum maiores,
          non tenetur nemo similique optio? Ipsa impedit unde ad tempore
          distinctio quam perspiciatis similique facere. Molestiae repellendus
          eligendi corporis consectetur reprehenderit aliquam ratione qui aut.
          Molestiae dolorum adipisci consequuntur, dolorem impedit earum ad
          illum porro doloribus ratione mollitia tempora quas nam neque
          molestias placeat eius, perferendis quae voluptatibus. Fugit
          necessitatibus tempore culpa qui, dolore deserunt! Nostrum, ipsa
          cupiditate! Adipisci fuga aliquid repellendus suscipit. Vitae aliquid
          iste exercitationem quisquam libero dolorem, officia illo eius quia
          deserunt repudiandae omnis porro cum. Atque aliquid fuga temporibus
          nulla veritatis! Eligendi porro debitis autem repellat sint nulla
          blanditiis ex impedit voluptatibus mollitia, rerum voluptas sed
          voluptatem facilis quibusdam quo officia, animi ab corrupti officiis,
          beatae ipsum consequuntur. Mollitia, temporibus minus. Qui assumenda
          autem vel amet velit, est deserunt voluptatum consectetur aperiam eius
          ipsum temporibus repellendus sint, unde quod nesciunt, aspernatur odit
          quae soluta ipsam et sunt. Quaerat reiciendis quia facere. At velit,
          veritatis ipsa rerum accusamus accusantium molestias perferendis
          excepturi iure quidem earum, voluptates, a animi ab laboriosam odio
          harum asperiores delectus nesciunt facere blanditiis distinctio
          quisquam dignissimos quibusdam? Autem! Autem blanditiis beatae libero
          ab doloremque nam ut, illum consequatur soluta, obcaecati similique
          ipsa cum sint exercitationem maiores id hic, assumenda harum quidem
          corporis reiciendis quam accusantium? Repellendus, odio debitis. Atque
          id et dignissimos maiores sunt deleniti excepturi, officia, quis
          quisquam dolores voluptatum sapiente, corporis cupiditate quibusdam
          nobis iusto recusandae eveniet nostrum facilis doloremque? Eveniet,
          expedita natus? Non, incidunt vel. Recusandae adipisci fugiat
          asperiores fugit eaque sunt excepturi, consectetur cupiditate ad,
          optio alias dolorum tempora voluptatibus incidunt a quidem ipsum non
          vitae qui. Dolor, eveniet mollitia. Nemo dicta illo dolor. Eius
          pariatur quae fuga sapiente illo id ad eligendi autem sunt. Modi
          laborum illo iste earum obcaecati dolorem culpa itaque perferendis.
          Quam deleniti quae, obcaecati soluta repellat nemo expedita aut. Vel
          deserunt soluta cupiditate praesentium vero deleniti nam nihil quidem
          quibusdam accusantium dignissimos laudantium voluptatem obcaecati
          laboriosam ut tempora hic, amet exercitationem impedit numquam. Animi
          repudiandae eum facere quo ad! Obcaecati perspiciatis quia numquam
          aperiam error vel earum facere ut reprehenderit architecto fugiat
          ipsum, iste animi libero praesentium labore eum veritatis corrupti
          doloribus sunt ipsa. Ipsum ad mollitia quam ullam? Deserunt velit
          autem ad maxime quo. Molestias deleniti quae nobis veritatis tempora
          adipisci doloremque qui expedita quisquam neque. Quia et tenetur
          dignissimos eveniet perspiciatis aliquid ea suscipit aliquam quibusdam
          voluptatibus? Temporibus consequatur autem corporis minima quas
          nostrum repudiandae molestias officiis tempora, et consequuntur quidem
          quis nesciunt cumque cum porro totam eius ratione. Impedit quisquam
          aliquid repellendus sequi, explicabo itaque maiores. Modi ullam, hic
          esse voluptate harum maiores, in vitae placeat, nobis similique
          voluptas fugit laboriosam est. Provident, autem iste impedit eum,
          nesciunt harum ab quod voluptas saepe nostrum reiciendis deserunt.
          Fuga nulla consequuntur, optio itaque dolorum voluptates. Delectus
          iure labore aliquid illo officiis molestias optio? Excepturi pariatur
          minima alias nisi numquam reiciendis deleniti exercitationem libero
          impedit quae, rem facilis ipsa. Modi ex voluptatum debitis maxime,
          voluptatem, voluptatibus tempore impedit, a suscipit beatae doloribus
          sequi! Sint, odio nam iure fugiat illo pariatur, illum dolore aliquid
          laborum earum dignissimos aperiam rem repellendus. Animi velit eos,
          error voluptatem est, corporis dolorum libero aliquid beatae corrupti
          hic voluptas labore consectetur assumenda sapiente quos, maxime
          repellendus quaerat non cum excepturi alias dolores in? Molestiae,
          excepturi. Nostrum incidunt dolorem eligendi adipisci sunt perferendis
          similique illo aliquam fuga porro quas recusandae, dolorum optio quam
          ea totam rerum ipsum temporibus sint nemo voluptatum maxime magnam
          libero non. Quos. Praesentium, amet cupiditate. Tempora officiis omnis
          tenetur mollitia libero quo ab quod voluptatem? Veniam, doloremque
          eius. Nostrum, fugit? Est error a nesciunt ipsam esse maxime adipisci
          magnam assumenda? Veritatis, dolore. Reprehenderit perferendis
          officiis sit doloribus magnam dolorem enim ullam sed amet quisquam
          accusamus nemo commodi asperiores, facilis architecto cumque repellat
          exercitationem molestias. Commodi fuga quos non, animi ullam deleniti
          provident? Laborum eum, repellendus, beatae culpa quis nostrum dolor
          eius, non consectetur debitis fugiat? Error, nobis veniam voluptate
          laudantium sint quos nisi deserunt animi minus harum quaerat eius
          ratione at in. Impedit eos facilis eius sit unde odit, dolorum a sequi
          voluptatum necessitatibus? Sint, obcaecati assumenda voluptatem ut
          accusantium aperiam minima, quia quae laboriosam error illo tenetur
          cumque, hic mollitia! Neque? Quaerat officiis ullam quas iure possimus
          dignissimos veniam rem cupiditate hic, itaque totam doloribus nihil
          provident nulla fugit accusantium magnam minima facilis tempore, sed
          officia alias beatae. Doloremque, molestiae commodi?
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
